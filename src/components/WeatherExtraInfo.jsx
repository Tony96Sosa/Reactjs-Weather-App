import React from 'react';

const WeatherExtraInfo  = ({ humidity, wind }) => (
    <>
        <p>{`Humedad= ${ humidity }, Viento= ${ wind }`}</p>
    </>
)

export default WeatherExtraInfo;