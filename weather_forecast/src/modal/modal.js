import React from 'react'

const Modal = ({
    weatherData
}) => {

  const getWeatherClasses = (weatherState) => {
    let weatherStateClass = "normal";
    switch(weatherState){
      case 'Snow':
        weatherStateClass = 'snow';
        break;
      case 'Sleet': 
        weatherStateClass = 'normal';
        break;
      case 'Hail':
        weatherStateClass = 'hail';
        break;
      case 'Thunderstorm':
        weatherStateClass = 'thunderstorm';
        break;
      case 'Heavy Rain': 
        weatherStateClass = "heavy-rain";
        break;
      case 'Light Rain':
        weatherStateClass = 'light-rain';
        break;
      case 'Showers':
        weatherStateClass = 'showers';
        break;
      case 'Heavy Cloud':
        weatherStateClass = 'heavy-cloud';
        break;
      case 'Light Cloud':
        weatherStateClass = 'light-cloud';
        break;
      case 'Clear': 
        weatherStateClass = 'clear';
        break;
      default:
        weatherStateClass = 'normal';
        break;
    }
    return weatherStateClass
  }
    return (
        <>
          <div className="modal">
              <div className="modal-body">
              <table>
                <thead>
                    <tr>
                      <th className="weatherStateName">Weather State Name</th>
                      <th className="th-header">Weather State Abbr</th>
                      <th className="th-header">Wind Direction Compass</th>
                      <th className="th-header">Created</th>
                      <th className="th-header">Applicable Date</th>
                      <th className="th-header">Min Temp</th>
                      <th className="th-header">Max Temp</th>
                      <th className="th-header">The Temp</th>
                      <th className="th-header">Wind Speed</th>
                      <th className="th-header">Wind Direction</th>
                      <th className="th-header">Air Pressure</th>
                      <th className="th-header">Humidity</th>
                      <th className="th-header">Visibility</th>
                      <th className="th-header">Predictability</th>
                    </tr>
                  </thead>
                  { weatherData.map((data,index) => {
                    if (data) {
                      let weatherStateClass = getWeatherClasses(data.weather_state_name)
                      return (
                      <>
                        <tbody> 
                          <tr>

                            <td className={`th-weatherStateName ${weatherStateClass}`}> { data.weather_state_name ? data.weather_state_name : ""} </td>

                            { Object.keys(data).map((key,index) => {
                              if(key !== "weather_state_name" && key !== "id"){
                                return (
                                  <>
                                    <td className={`th-rows ${weatherStateClass}`}> { data[key] ? data[key] : "" } </td>
                                  </>
                                )
                              }
                            })}

                            </tr>
                        </tbody>
                      </>
                    )	
                  } else {
                    return (
                      <>
                      </>
                    )
                  }
                    }) }
              </table>
              </div>
          </div>
        </>
      );    
}

export default Modal;