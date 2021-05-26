import React from 'react';

const LocationCard = ({
    locationName,
    locationId = '',
    handleClick
}) => {
  return (
    <>
        <div>
              <h1
              onClick={handleClick}
              >
              {locationName}</h1>
	    </div>	
    </>
  );
}

export default LocationCard