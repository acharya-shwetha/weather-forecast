import React from 'react'

const Modal = ({
    weatherData
}) => {
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
                      return (
                      <>
                        <tbody> 
                          <tr>

                            <td className="th-weatherStateName"> { data.weather_state_name ? data.weather_state_name : ""} </td>

                            <td className="th-rows"> { data.weather_state_abbr ? data.weather_state_abbr : "" } </td>

                            <td className="th-rows"> { data.wind_direction_compass ? data.wind_direction_compass : "" } </td>

                            <td className="th-rows"> { data.created ? data.created : "" } </td>

                            <td className="th-rows"> { data.applicable_date ? data.applicable_date : "" } </td>

                            <td className="th-rows"> { data.min_temp ? data.min_temp : "" } </td>

                            <td className="th-rows"> { data.max_temp ? data.max_temp : "" } </td>

                            <td className="th-rows"> { data.the_temp ? data.the_temp : "" } </td>

                            <td className="th-rows"> { data.wind_speed ? data.wind_speed : "" } </td>

                            <td className="th-rows"> { data.wind_direction ? data.wind_direction : "" } </td>

                            <td className="th-rows"> { data.air_pressure ? data.air_pressure : "" } </td>

                            <td className="th-rows"> { data.humidity ? data.humidity : "" } </td>

                            <td className="th-rows"> { data.visibility ? data.visibility : "" } </td>

                            <td className="th-rows"> { data.predictability ? data.predictability : "" } </td>

                            </tr>
                        </tbody>
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