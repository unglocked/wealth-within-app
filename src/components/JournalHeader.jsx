import React from 'react';
import { FaFire } from 'react-icons/fa';

const JournalHeader = ({ streak, streakWarning }) => {
  return (
    <div className="header">
      <h2 className="header-title">Journal</h2>
      <div className="streak" style={{ color: streakWarning ? 'red' : 'green' }}>
        <FaFire className="streak-icon" />
        {streak} day streak {streakWarning}
      </div>
    </div>
  );
};

export default JournalHeader;