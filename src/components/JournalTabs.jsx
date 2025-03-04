import React from 'react';

const JournalTabs = ({ activeTab, handleTabClick }) => {
  return (
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
  );
};

export default JournalTabs;