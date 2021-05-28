import React, { useState } from 'react';
import Modal from '../modal/modal';

const LocationCard = ({
    locationName,
    locationId = ''
}) => {

  const [locationInfo, setLocationInfo] = useState({
    showModalData: false,
    weatherData: []
  });

  const fetchLocationData = async () => {
    return await fetch(`https://www.metaweather.com/api/location/${locationId}`)
      .then(response => response.json())
      .then(data => {
        let locationData = {
          showModalData: true,
          weatherData: data.consolidated_weather
        }
        setLocationInfo({...locationData}) 
        })
        .catch(error => setLocationInfo({showModalData: false, weatherData: []}));}

  const handleClick = event => {
    event.preventDefault();
    if(!locationInfo.showModalData){
      fetchLocationData();
    }else {
      let locationData = {
        showModalData: false,
        weatherData: []
      }
      setLocationInfo({...locationData});
    }
  };
  

  return (
    <>
        <div>
              <h1 className="location-card"
              onClick={handleClick}
              >
              {locationName}</h1>
              {locationInfo.showModalData && (
                <Modal
                  weatherData={locationInfo.weatherData}
                />
              )}
	    </div>	
    </>
  );
}

export default LocationCard