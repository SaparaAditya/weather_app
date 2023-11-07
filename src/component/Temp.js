import React from 'react'
import Weather from './weather';
import "./style.css";
import { useState } from 'react'
// ec7ee8fa459afc773901b1039df8d397
export default function Temp() {
    const [state,setstate]=useState("pune");
    const [initial,setinitial]=useState([]);
    const getWeatherInfo=async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid=ec7ee8fa459afc773901b1039df8d397`;
            let obj=await fetch(url);
            let data=await obj.json();
            const {temp,humidity,pressure}=data.main;
            const {main:weathermood}=data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;
            const allinfo={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            setinitial(allinfo);
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <div>
       <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={state}
            onChange={(e) => setstate(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <Weather {...initial} />
    </div>
  );
};
