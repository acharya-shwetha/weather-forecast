import React from 'react';

const SearchBar = ({
    searchQuery = '', 
    handleSearch
}) => {
  
  return (
    <input 
      className="search-bar"
     key="location-search-bar"
     value={searchQuery}
     placeholder={"search location"}
     onChange={handleSearch}
    />
  );
}

export default SearchBar