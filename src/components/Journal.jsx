import React, { useState, useEffect, useContext } from 'react';
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, updateDoc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';
import JournalHeader from './JournalHeader';
import JournalTabs from './JournalTabs';
import TodayPrompt from './TodayPrompt';
import PastEntries from './PastEntries';
import './Journal.css'; // Import the CSS file

const Journal = () => {
  const { currentUser } = useContext(AuthContext);
  const [prompt, setPrompt] = useState('');
  const [category, setCategory] = useState('');
  const [order, setOrder] = useState(null);
  const [entry, setEntry] = useState('');
  const [hasEntryToday, setHasEntryToday] = useState(false);
  const [streak, setStreak] = useState(0);
  const [streakWarning, setStreakWarning] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [pastEntries, setPastEntries] = useState([]);
  const [activeTab, setActiveTab] = useState('Today’s Prompt');
  const db = getFirestore();
  const [saveMessage, setSaveMessage] = useState('');

  const getTodayDate = () => {
    const today = new Date();
    return today.toLocaleDateString('en-CA');
  };

  const fetchPastEntries = async () => {
    try {
      const entriesCollection = collection(db, `users/${currentUser.uid}/entries`);
      const entriesSnapshot = await getDocs(entriesCollection);
      console.log("entriesSnapshot:", entriesSnapshot);
      const entriesList = entriesSnapshot.docs.map(doc => {
        const data = doc.data();
        console.log("data:", data);
        const timestamp = data.timestamp ? data.timestamp.toDate() : null;
        const formattedTimestamp = timestamp
          ? `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}`
          : 'No timestamp';
        return {
          id: doc.id,
          ...data,
          timestamp: formattedTimestamp,
          isEditing: false,
          order: data.order || null,
        };
      });
      setPastEntries(entriesList);
    } catch (error) {
      console.error('Error fetching past entries:', error);
    }
  };

  useEffect(() => {
    const fetchPromptAndEntry = async () => {
      setLoading(true);
      try {
        const promptDoc = await getDoc(doc(db, 'prompts', 'NHdNnSptRrnGvz4cW3sw'));
        if (promptDoc.exists()) {
          const promptData = promptDoc.data();
          if (promptData.orderedPrompts) { // Use orderedPrompts instead of promptsWithCat
            // Sort by order to ensure sequence
            const sortedPrompts = promptData.orderedPrompts.sort((a, b) => a.order - b.order);
            let foundUnenteredPrompt = false;

            for (const promptObj of sortedPrompts) {
              const entryDoc = await getDoc(doc(db, `users/${currentUser.uid}/entries`, promptObj.text));
              if (!entryDoc.exists()) {
                setPrompt(promptObj.text);
                setCategory(promptObj.category);
                setOrder(promptObj.order);
                foundUnenteredPrompt = true;
                break;
              }
            }

            // If all prompts are entered, set the last prompt
            if (!foundUnenteredPrompt && sortedPrompts.length > 0) {
              const lastPromptObj = sortedPrompts[sortedPrompts.length - 1];
              setPrompt(lastPromptObj.text);
              setCategory(lastPromptObj.category);
              setOrder(lastPromptObj.order);
            }
          } else {
            setPrompt('No prompts available');
            setCategory('');
            setOrder(null);
          }
        } else {
          console.error('No such document!');
          setPrompt('promptDoc does not exist');
          setCategory('');
          setOrder(null);
        }

        const userDoc = await getDoc(doc(db, `users/${currentUser.uid}`));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setStreak(userData.streak || 0);
          const lastEntryDate = userData.lastEntryDate;
          const todayDate = getTodayDate();

          if (lastEntryDate !== todayDate) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayDate = yesterday.toLocaleDateString('en-CA');

            if (lastEntryDate === yesterdayDate) {
              setStreakWarning('in jeopardy!');
            } else {
              setStreak(0);
            }
          }
        } else {
          console.error('User document does not exist!');
        }
      } catch (error) {
        console.error('Error fetching prompt:', error);
        setPrompt('Error loading prompt');
        setCategory('');
        setOrder(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPromptAndEntry();
    fetchPastEntries();
  }, [currentUser, db]);

  const handleSubmit = async () => {
    setSaving(true);
    try {
      if (currentUser) {
        const todayDate = getTodayDate();
        const userDocRef = doc(db, `users/${currentUser.uid}`);
        const userDoc = await getDoc(userDocRef);
        
        let newStreak = streak;
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const lastEntryDate = userData.lastEntryDate;
          
          if (lastEntryDate !== todayDate) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayDate = yesterday.toLocaleDateString('en-CA');

            if (lastEntryDate === yesterdayDate) {
              newStreak += 1;
            } else {
              newStreak = 1;
            }
          }
        } else {
          newStreak = 1;
        }

        const entryDocRef = doc(db, `users/${currentUser.uid}/entries`, prompt);
        await setDoc(entryDocRef, {
          entry,
          timestamp: new Date(),
          order,
        });

        if (!hasEntryToday) {
          await setDoc(userDocRef, {
            streak: newStreak,
            lastEntryDate: todayDate,
          }, { merge: true });

          setStreak(newStreak);
          setHasEntryToday(true);
          setStreakWarning('');
        }

        setSaveMessage('Entry saved successfully! Loading next prompt...');
        fetchPastEntries();
        setTimeout(() => {
          setSaveMessage('');
          fetchNextPrompt();
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setSaving(false);
    }
  };

  const fetchNextPrompt = async () => {
    setLoading(true);
    try {
      const promptDoc = await getDoc(doc(db, 'prompts', 'NHdNnSptRrnGvz4cW3sw'));
      if (promptDoc.exists()) {
        const promptData = promptDoc.data();
        if (promptData.orderedPrompts) {
          const sortedPrompts = promptData.orderedPrompts.sort((a, b) => a.order - b.order);
          let foundUnenteredPrompt = false;

          for (const promptObj of sortedPrompts) {
            const entryDoc = await getDoc(doc(db, `users/${currentUser.uid}/entries`, promptObj.text));
            if (!entryDoc.exists()) {
              setPrompt(promptObj.text);
              setCategory(promptObj.category);
              setOrder(promptObj.order);
              setEntry('');
              foundUnenteredPrompt = true;
              break;
            }
          }

          if (!foundUnenteredPrompt && sortedPrompts.length > 0) {
            const lastPromptObj = sortedPrompts[sortedPrompts.length - 1];
            setPrompt(lastPromptObj.text);
            setCategory(lastPromptObj.category);
            setOrder(lastPromptObj.order);
          }
        } else {
          setPrompt('No prompts available');
          setCategory('');
          setOrder(null);
        }
      } else {
        console.error('No such document!');
        setPrompt('promptDoc does not exist');
        setCategory('');
        setOrder(null);
      }
    } catch (error) {
      console.error('Error fetching prompt:', error);
      setPrompt('Error loading prompt');
      setCategory('');
      setOrder(null);
    } finally {
      setLoading(false);
      fetchPastEntries();
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleEditClick = (id) => {
    setPastEntries(pastEntries.map(entry => 
      entry.id === id ? { ...entry, isEditing: true } : entry
    ));
  };

  const handleSaveEdit = async (id, updatedEntry) => {
    try {
      const entryDocRef = doc(db, `users/${currentUser.uid}/entries`, id);
      await updateDoc(entryDocRef, {
        entry: updatedEntry,
        timestamp: new Date(),
      });
      setPastEntries(pastEntries.map(entry => 
        entry.id === id ? { ...entry, entry: updatedEntry, isEditing: false } : entry
      ));
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

  const handleCancelEdit = (id) => {
    setPastEntries(pastEntries.map(entry => 
      entry.id === id ? { ...entry, isEditing: false } : entry
    ));
  };

  return (
    <div className="journal-container">
      <JournalHeader streak={streak} streakWarning={streakWarning} />
      <JournalTabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="content">
        {activeTab === 'Today’s Prompt' && (
          <TodayPrompt
            loading={loading}
            category={category}
            prompt={prompt}
            order={order}
            entry={entry}
            setEntry={setEntry}
            handleSubmit={handleSubmit}
            saving={saving}
            saveMessage={saveMessage}
          />
        )}
        {activeTab === 'Past Entries' && (
          <PastEntries
            pastEntries={pastEntries}
            handleEditClick={handleEditClick}
            handleSaveEdit={handleSaveEdit}
            handleCancelEdit={handleCancelEdit}
            setPastEntries={setPastEntries}
          />
        )}
      </div>
    </div>
  );
};

export default Journal;