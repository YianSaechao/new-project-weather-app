import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CurrentWeather = ({ setCity }) => {
    const [data, setData] = useState({
    temp: 10,
    name: 'Seattle',
    humidity: 10,
    speed: 2,

});

    const [name, setName] = useState('');

    const handleClick = () => {
    if (name !== '') {
        setCity(name);

        const apiKey = 'a622e6658fdc2b6558c3f8b8fb9df541'; 
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=imperial`;

        axios.get(apiURL)
        .then((res) => {
          const sunriseTime = new Date(res.data.sys.sunrise * 1000).toLocaleTimeString();
          const sunsetTime = new Date(res.data.sys.sunset * 1000).toLocaleTimeString();

        setData({
            temp: res.data.main.temp,
            feels_like: res.data.main.feels_like,
            low: res.data.main.temp_min,
            high: res.data.main.temp_max,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            sunrise: sunriseTime,
            sunset: sunsetTime,
            icon: res.data.weather[0].icon,
        });
        })
        .catch((error) => {
        console.error(error);
        });
    }
};

useEffect(() => {
    handleClick();
}, []);

return (
    <div>
    <div className='current-weather'>
        <div className='current-search'>
        <input
            type='text'
            placeholder='Search...'
            style={{ textTransform: 'capitalize' }}
            onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClick}>Submit</button>
        </div>

        <div className='current-weather-info'>
            <img src={`https://openweathermap.org/img/w/${data.icon}.png`} alt='' className='icon' />
            <h1>{data.temp}&deg;F</h1>
            <h2>{data.name}</h2>
            <div>Humidity: {data.humidity}%</div>
            <div>Wind Speed: {data.speed} mph</div>
            <div>Feels Like: {data.feels_like}&deg;F</div>
            <div>Sunrise: {data.sunrise}</div>
            <div>Sunset: {data.sunset}</div>
        </div>
    </div>
    </div>
);
};

export default CurrentWeather;