import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weekly = ({ city }) => {
    const [weatherData, setWeatherData] = useState([]);
    const apiKey = 'a622e6658fdc2b6558c3f8b8fb9df541'  

    useEffect(() => {
    axios
        .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`)
        .then((response) => {
        const currentDate = new Date().toLocaleDateString();  

        const extractedData = response.data.list.reduce((accumulator, item) => {
            const itemDate = item.dt_txt.split(' ')[0];  

         
        if (!accumulator.find((day) => day.date === itemDate)) {
            const date = new Date(item.dt_txt);
            const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
            const minTemperatureFahrenheit = item.main.temp_min;
            const maxTemperatureFahrenheit = item.main.temp_max;
            const weatherIcon = item.weather[0].icon;

            accumulator.push({
                date: itemDate,
                dayOfWeek: dayOfWeek,
                minTemperature: minTemperatureFahrenheit,
                maxTemperature: maxTemperatureFahrenheit,
                weatherIcon: weatherIcon,
            });
        }
            return accumulator;
        }, []);

        const sortedData = extractedData
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 5);

        setWeatherData(sortedData);
    })
        .catch((error) => {
        console.error(error);
    });
}, [city]);

    return (
    <div className='weekly'>
        <hr />
        <h1>5-Day Weather Forecast</h1>
        <div className="Forecast-Div3">
            {weatherData.map((item, index) => (
            <div key={index} className="Forecast-Day">
            <p>{item.dayOfWeek}</p>
            <p>High: {item.maxTemperature} °F</p>
            <img src={`https://openweathermap.org/img/wn/${item.weatherIcon}.png`} alt="" />
            <p>Low: {item.minTemperature} °F</p>
        </div>
        ))}
    </div>
    </div>
);
};

export default Weekly;