import React from 'react';

const TodayPrompt = ({ loading, category, prompt, order, entry, setEntry, handleSubmit, saving, saveMessage }) => {
  return (
    <div className="tab-content">
      {loading ? (
        <p className="loading-message">Loading...</p>
      ) : (
        <>
          {category && <h3 className="category-header">{category}</h3>}
          <p className="prompt">{`#${order}: ${prompt}`}</p>
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
  );
};

export default TodayPrompt;