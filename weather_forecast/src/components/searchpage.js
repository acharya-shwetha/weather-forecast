import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar';
import LocationCard from "./locationcard";

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [consolidatedData, setConsolidatedData] = useState([]);
  const [locationList, setLocationList] = useState([]);

  const fetchLocationList = async () => {
    return await fetch(`https://www.metaweather.com/api/location/search/?query=${input}`)
      .then(response => response.json())
      .then(data => {
         setLocationList(data) 
       })
       .catch(error => setLocationList([]));}

  const handleSearch = event => {
    if (event.hasOwnProperty('target') && event.target.value) {
        setInput(event.target.value);
    } else {
        setInput('');
    }
  };

//   const handleClick = event => {
//     event.preventDefault();
//     if (event.hasOwnProperty('target') && event.target.value) {
//         console.log(event.target.value)
//         setInput(event.target.value);
//     } else {
//         setInput('');
//     }
//   };

  useEffect( () => {
    fetchLocationList()},[input]);
	
  return (
    <>
      <h1>Location List</h1>
      <SearchBar 
       searchQuery={input} 
       handleSearch={handleSearch}
      />
      { locationList.map((data,index) => {
        if (data) {
          return (
            <LocationCard 
            locationName={data.title}
            locationId = {data.woeid}
            // handleClick = {handleClick}
            />
    	   )	
    	 }
        }) }
    </>
   );
}

export default SearchPage