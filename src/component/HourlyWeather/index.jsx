import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HourlyWeather = ({ city }) => {
    const [weatherData, setWeatherData] = useState([]);
    const [currentTime, setCurrentTime] = useState('');

    const apiKey = 'a622e6658fdc2b6558c3f8b8fb9df541'; 

    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)
        .then((response) => {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();

        const upcomingTimeSlots = [21, 0, 3, 6, 9]; 
        const nearestTimes = upcomingTimeSlots.map((targetHour) => {
 
        const nearestDataPoint = response.data.list.reduce((nearest, item) => {
            const date = new Date(item.dt_txt);
            const hour = date.getHours();
            const timeDifference = Math.abs(hour - targetHour);
            if (timeDifference < nearest.timeDifference) {
            return { timeDifference, data: item };
            }
            return nearest;
        }, { timeDifference: Infinity, data: null });

        if (nearestDataPoint.data) {
            const temperatureCelsius = nearestDataPoint.data.main.temp;
            const weatherMain = nearestDataPoint.data.weather[0].main;
            const weatherIcon = nearestDataPoint.data.weather[0].icon;

 
            const formattedTime =
            targetHour === 0
                ? '12:00 AM'
                : targetHour === 12
                ? '12:00 PM'
                : targetHour < 12
                ? `${targetHour}:00 AM`
                : `${targetHour - 12}:00 PM`;

            return {
            time: formattedTime,
            temperature: temperatureCelsius,
            weatherMain: weatherMain,
            weatherIcon: weatherIcon,
            };
        }
        return null;
        });

        setWeatherData(nearestTimes.filter(Boolean)); 

        const currentTimeString = currentDate.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });
        setCurrentTime(currentTimeString);
    })
    .catch((error) => {
        console.error(error);
    });
}, [city]);

return (
    <div>
    <hr />
    <h1>Hourly Forecast</h1>
    <p>Current Time: {currentTime}</p>
    <div className="hourly-div1">
        {weatherData.map((item, index) => (
        <div key={index} className="hourly-div2">
            <p>{item.time}</p>
            <p>{item.temperature}°F</p>
            <p>{item.weatherMain}</p>
            <img src={`https://openweathermap.org/img/wn/${item.weatherIcon}.png`} alt="Weather Icon" />
        </div>
        ))}
    </div>
    </div>
);
};

export default HourlyWeather;