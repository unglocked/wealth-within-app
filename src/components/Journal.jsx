import React, { useState, useEffect, useContext } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, updateDoc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';
import { FaFire } from 'react-icons/fa';
import './Journal.css'; // Import the CSS file

const Journal = () => {
  const { currentUser } = useContext(AuthContext);
  const [prompt, setPrompt] = useState('');
  const [category, setCategory] = useState(''); // Add category state
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
      const entriesList = entriesSnapshot.docs.map(doc => {
        const data = doc.data();
        const timestamp = data.timestamp ? data.timestamp.toDate() : null;
        const formattedTimestamp = timestamp
          ? `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}`
          : 'No timestamp';

        return {
          id: doc.id,
          ...data,
          timestamp: formattedTimestamp,
          isEditing: false, // Add isEditing state to each entry
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
          if (promptData.promptsWithCat) {
            let foundPrompt = false;
            for (const [cat, prompts] of Object.entries(promptData.promptsWithCat)) {
              for (const p of prompts) {
                const entryDoc = await getDoc(doc(db, `users/${currentUser.uid}/entries`, p));
                if (!entryDoc.exists()) {
                  setPrompt(p);
                  setCategory(cat);
                  foundPrompt = true;
                  break;
                }
              }
              if (foundPrompt) break; // Exit outer loop if a prompt is found
            }
          } else {
            setPrompt('No prompts available');
            setCategory(''); // Reset category
          }
        } else {
          console.error('No such document!');
          setPrompt('promptDoc does not exist');
          setCategory(''); // Reset category
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
        setCategory(''); // Reset category
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
              newStreak += 1; // Increase streak if they journaled yesterday
            } else {
              newStreak = 1; // Reset streak if they missed a day
            }
          }
        } else {
          newStreak = 1; // First entry ever
        }
  
        // Save journal entry
        const entryDocRef = doc(db, `users/${currentUser.uid}/entries`, prompt);
        await setDoc(entryDocRef, {
          entry,
          timestamp: new Date(),
        });
  
        // Update streak **only if it's the first entry of the day**
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
        fetchPastEntries(); // Refresh past entries immediately after saving the entry
        setTimeout(() => {
          setSaveMessage('');
          fetchNextPrompt(); // Fetch the next prompt after 3 seconds
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
        if (promptData.promptsWithCat) {
          let foundPrompt = false;
          for (const [cat, prompts] of Object.entries(promptData.promptsWithCat)) {
            for (const p of prompts) {
              const entryDoc = await getDoc(doc(db, `users/${currentUser.uid}/entries`, p));
              if (!entryDoc.exists()) {
                setPrompt(p);
                setCategory(cat);
                setEntry(''); // Clear the entry
                foundPrompt = true;
                break;
              }
            }
            if (foundPrompt) break; // Exit outer loop if a prompt is found
          }
        } else {
          setPrompt('No prompts available');
          setCategory(''); // Reset category
        }
      } else {
        console.error('No such document!');
        setPrompt('promptDoc does not exist');
        setCategory(''); // Reset category
      }
    } catch (error) {
      console.error('Error fetching prompt:', error);
      setPrompt('Error loading prompt');
      setCategory(''); // Reset category
    } finally {
      setLoading(false);
      fetchPastEntries(); // Refresh past entries after loading the next prompt
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
      <div className="header">
        <h2 className="header-title">Journal</h2>
        <div className="streak" style={{ color: streakWarning ? 'red' : 'green' }}>
          <FaFire className="streak-icon" />
          {streak} day streak {streakWarning}
        </div>
      </div>

      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'Today’s Prompt' ? 'active' : ''}`}
          onClick={() => handleTabClick('Today’s Prompt')}
        >
          Today’s Prompt
        </button>
        <button
          className={`tab-button ${activeTab === 'Past Entries' ? 'active' : ''}`}
          onClick={() => handleTabClick('Past Entries')}
        >
          Past Entries
        </button>
      </div>

      <div className="content">
        {activeTab === 'Today’s Prompt' && (
          <div className="tab-content">
            {loading ? (
              <p className="loading-message">Loading...</p>
            ) : (
              <>
                {category && <h3 className="category-header">{category}</h3>} {/* Display category */}
                <p className="prompt">{prompt}</p>
                <textarea
                  className="textarea"
                  value={entry}
                  onChange={(e) => setEntry(e.target.value)}
                  placeholder="Write your response here..."
                />
                <div className="save-container">
                  <button className="save-button" onClick={handleSubmit} disabled={saving}>
                    {saving ? 'Saving...' : 'Save Entry'}
                  </button>
                  {saveMessage && <span className="save-message">{saveMessage}</span>}
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === 'Past Entries' && (
          <div className="tab-content">
            <h3 className="past-entries-title">Past Entries</h3>
            {pastEntries.length === 0 ? (
              <p className="no-entries-message">No past entries yet. Start journaling today!</p>
            ) : (
              pastEntries.map((entry) => (
                <div key={entry.id} className="entry-card">
                  {entry.isEditing ? (
                    <>
                      <textarea
                        className="textarea"
                        value={entry.entry}
                        onChange={(e) => setPastEntries(pastEntries.map(pastEntry => 
                          pastEntry.id === entry.id ? { ...pastEntry, entry: e.target.value } : pastEntry
                        ))}
                      />
                      <button onClick={() => handleSaveEdit(entry.id, entry.entry)}>Save</button>
                      <button onClick={() => handleCancelEdit(entry.id)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <p className="entry-prompt">{entry.id}</p>
                      <p className="entry-response">{entry.entry}</p>
                      <p className="entry-timestamp">{entry.timestamp}</p>
                      <button onClick={() => handleEditClick(entry.id)}>Edit</button>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Journal;