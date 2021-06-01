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
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    var raw = JSON.stringify({"woeid":locationId});

    var requestOptions = {
      method: 'POST',
      headers: headers,
      body: raw,
      redirect: 'follow'
    };
    // return await fetch(`https://www.metaweather.com/api/location/${locationId}`)
    return await fetch(`http://localhost:8080/api/location`, requestOptions)
      .then(response => response.json())
      .then(data => {
        let {locationDatas} = data;
        let locationData = {
          showModalData: true,
          weatherData: locationDatas.consolidated_weather
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