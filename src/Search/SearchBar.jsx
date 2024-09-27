import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Destination" />
      <input type="date" />
      <input type="date" />
      <select>
        <option>1 Room, 1 Guest(s)</option>
      </select>
      <button>Search</button>
    </div>
  );
};

export default SearchBar; 
