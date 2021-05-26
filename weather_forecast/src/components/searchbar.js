import React from 'react';

const SearchBar = ({
    searchQuery = '', 
    handleSearch
}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={searchQuery}
     placeholder={"search location"}
     onChange={handleSearch}
    />
  );
}

export default SearchBar