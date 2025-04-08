import React from 'react';

function SearchHistory({ history, onSelect }) {
  return (
    <div className="search-history">
      <h4>Recent Searches</h4>
      <ul>
        {history.map((city, index) => (
          <li key={index}>
            <button onClick={() => onSelect(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;
