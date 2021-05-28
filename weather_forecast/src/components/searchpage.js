import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar';
import LocationCard from "./locationcard";

const SearchPage = (props) => {
  const [input, setInput] = useState('');
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


  useEffect( () => {
    fetchLocationList()},[input]);
	
  return (
    <>
      <h1>Start typing in searchbar to see results!!</h1>
      <SearchBar 
       searchQuery={input} 
       handleSearch={handleSearch}
      />
      { locationList.map((data,index) => {
        if (data) {
          return (
          <div key={`location-${data.woeid}`}>
            <LocationCard 
            key={`location-${data.woeid}`}
            locationName={data.title}
            locationId = {data.woeid}
            />
          </div>
    	   )	
    	 } else {
        return (
          <>
          </>
        )
      }
        }) }
    </>
   );
}

export default SearchPage