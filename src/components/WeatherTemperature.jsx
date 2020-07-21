import React from 'react';
import WeatherIcons from 'react-weathericons';

const getWeatherState = (weatherState) => {
    return <WeatherIcons name="" size="2x"/>
}
const WeatherTemperature = ({ temperature, weatherState}) => (
    <>
        getWeatherState(weatherState)
        <span>{`${ temperature }ºC`}</span>
    </>
)

export default WeatherTemperature;