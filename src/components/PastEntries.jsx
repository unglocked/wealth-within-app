import React from 'react';

const PastEntries = ({ pastEntries, handleEditClick, handleSaveEdit, handleCancelEdit, setPastEntries }) => {
  console.log("pastEntries:", pastEntries);
  return (
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
                <p className="entry-prompt">{`#${entry.order}: ${entry.id}`}</p>
                <p className="entry-response">{entry.entry}</p>
                <p className="entry-timestamp">{entry.timestamp}</p>
                <button onClick={() => handleEditClick(entry.id)}>Edit</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default PastEntries;