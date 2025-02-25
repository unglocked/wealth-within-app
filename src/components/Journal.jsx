import React, { useState, useEffect, useContext } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';
import { FaFire } from 'react-icons/fa';
import './Journal.css';

const Journal = () => {
  const { currentUser } = useContext(AuthContext);
  const [prompt, setPrompt] = useState('');
  const [entry, setEntry] = useState('');
  const [hasEntryToday, setHasEntryToday] = useState(false);
  const [streak, setStreak] = useState(0);
  const [streakWarning, setStreakWarning] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const db = getFirestore();

  // Get today's date in YYYY-MM-DD format in the user's time zone
  const getTodayDate = () => {
    const today = new Date();
    return today.toLocaleDateString('en-CA'); // 'en-CA' format is YYYY-MM-DD
  };

  // Fetch daily prompt and user's entry
  useEffect(() => {
    const fetchPromptAndEntry = async () => {
      setLoading(true);
      try {
        const promptDoc = await getDoc(doc(db, 'prompts', 'NHdNnSptRrnGvz4cW3sw'));
        console.log('Prompt document:', promptDoc);
        if (promptDoc.exists()) {
          const promptData = promptDoc.data();
          console.log('Prompt data:', promptData);
          if (Array.isArray(promptData.prompts)) {
            for (const p of promptData.prompts) {
              const entryDoc = await getDoc(doc(db, `users/${currentUser.uid}/entries`, p));
              if (!entryDoc.exists()) {
                setPrompt(p);
                break;
              }
            }
          } else {
            setPrompt('Prompt is not array');
          }
        } else {
          console.error('No such document!');
          setPrompt('promptDoc does not exist');
        }

        // Fetch user's streak data
        const userDoc = await getDoc(doc(db, `users/${currentUser.uid}`));
        console.log('User document:', userDoc);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log('User data:', userData);
          setStreak(userData.streak || 0);
          const lastEntryDate = userData.lastEntryDate;
          const todayDate = getTodayDate();

          if (lastEntryDate !== todayDate) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayDate = yesterday.toLocaleDateString('en-CA');
            console.log('Yesterday date:', yesterdayDate);
            console.log('Last entry date:', lastEntryDate);

            if (lastEntryDate === yesterdayDate) {
              setStreakWarning('in jeopardy!'); // Display warning if they missed one day
            } else {
              setStreak(0); // Reset streak if they missed two days
            }
          }
        } else {
          console.error('User document does not exist!');
        }
      } catch (error) {
        console.error('Error fetching prompt:', error);
        setPrompt('Error loading prompt');
      }
      setLoading(false);
    };
    fetchPromptAndEntry();
  }, [db, currentUser]);

  const handleSubmit = async () => {
    setSaving(true);
    try {
      if (currentUser) {
        const todayDate = getTodayDate();
        const entryDocRef = doc(db, `users/${currentUser.uid}/entries`, prompt);
        await setDoc(entryDocRef, {
          entry,
          timestamp: new Date(),
        });

        if (!hasEntryToday) {
          const userDoc = await getDoc(doc(db, `users/${currentUser.uid}`));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const lastEntryDate = userData.lastEntryDate;
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayDate = yesterday.toLocaleDateString('en-CA');

            if (lastEntryDate === yesterdayDate) {
              setStreak(streak + 1);
              setStreakWarning('');
            } else {
              setStreak(1); // Reset streak to 1 if they missed more than one day
              setStreakWarning('');
            }
          } else {
            setStreak(streak + 1);
          }

          setHasEntryToday(true);
          await setDoc(doc(db, `users/${currentUser.uid}`), {
            streak: streak + 1,
            lastEntryDate: todayDate,
          }, { merge: true });
        }

        alert('Entry saved successfully!'); // Replace with a toast notification later
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="journal-container">
      <div className="header">
        <h2>Journal</h2>
        <div className="streak" style={{ color: streakWarning ? 'red' : 'green' }}>
          <FaFire />
          {streak} day streak {streakWarning}
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="prompt">{prompt}</p>
          <textarea
            className="textarea"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          />
          <button onClick={handleSubmit} disabled={saving}>
            {saving ? 'Saving...' : 'Save Entry'}
          </button>
        </>
      )}
    </div>
  );
};

export default Journal;