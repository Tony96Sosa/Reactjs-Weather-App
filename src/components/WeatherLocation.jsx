import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <>
     <Location city={"Buenos Aires"}/>
     <WeatherData/>
    </>
)

export default WeatherLocation;