import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, placeholder }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder || "Rechercher..."}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
      <div className="search-icon">🔍</div>
    </div>
  );
};

export default SearchBar;
