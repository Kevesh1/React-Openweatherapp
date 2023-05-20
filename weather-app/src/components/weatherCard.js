import React from 'react';
import './styles.css';
import moment from 'moment';


const WeatherCard = ({weatherData}) => (
    <div className='container'>
        <h1 className="header">{weatherData.name}</h1>
        <div className='temp'>
            <h2>{Math.round(weatherData.main.temp)} °C</h2>
        </div>
        <div className='dates'>
            <p>Today: {moment().format('LL')}</p>
            <p>Feels like: {Math.round(weatherData.main.feels_like)} °C</p>
        </div>
        <div className='sun'>
            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        </div>
        <p className='desc'>Description: {weatherData.weather[0].description}</p>
    </div>

)

export default WeatherCard;