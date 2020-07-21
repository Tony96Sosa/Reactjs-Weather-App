import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <>
        <WeatherTemperature 
            temperature={ 25 } 
            weatherState={""}
        />
        <WeatherExtraInfo 
            humidity={ 80 } 
            wind={ "10m/s" }
        />
    </>
)

export default WeatherData;