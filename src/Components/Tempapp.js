import React, { useEffect, useState } from "react";
import "./CSS/style.css";

const Tempapp = () => {

  const [city, resetCity] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dcf7089525205a71acbe2f3a9dfa7a77`
      const response = await fetch(url);

      const dataJson = await response.json();
      //console.log(dataJson.main);
      resetCity(dataJson.main);
    }

    fetchApi();



  }, [search])


  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            placeholder="Enter Location"
            value={search}
            className="inputField"
            onChange={(event) => { setSearch(event.target.value) }} />
        </div>

        {!city ? (
          <p className="noData"> No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
              <i class="fa-solid fa-plane-departure"></i> {search}
              </h2>
              <h1 className="temp">
                {city.temp}°C
              </h1>
             <div className="setting">
              <h3 className="tempmin_max">
                Min : {city.temp_min}°C
              </h3>
              <h3 className="tempmin_max">
                Max : {city.temp_max}°C
              </h3>
              <h3 className="tempmin_max">
                Humidity : {city.humidity}
              </h3>
              <h3 className="tempmin_max">
                Sea Level : {city.sea_level}
              </h3>
             </div>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>

        )
        }


      </div>
    </>
  )
}

export default Tempapp;

