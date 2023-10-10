# React + Vite


This app is a weather dashboard built with React. The weather data is fetched from the OpenWeatherMap API using Axios. The app has user-friendly interface with a search input field and a submit buttonUsers can input a city name, click "Submit," and get the weather information for that city. It consists of three main components:

CurrentWeather: This component displays the current weather conditions for a specified city. It includes features such as temperature, humidity, wind speed, and sunrise/sunset times.  

HourlyWeather: This comoponent displays the current time and  temperature, weather conditions, and an icon in three-hour increments.  

Weekly: This component shows a 5-day weather forecast for the specified city. It displays the day of the week, high and low temperatures, and weather icons for each day.


Technologies Use: React, Axios, OpenWeather API
AppLink: https://app-hosting-ghd2.onrender.com/ & https://github.com/YianSaechao/new-project-weather-app

Unsolved Problems: The free openweather API doesn't include an hourly and daily forecast. I was only able to fetch the current weather data and 5 day forecast with 3hour step data. It was relatively straight forward to use the Current Weather data. The 5 day forecast with 3hour Step data was challenging to parse through and understand and difficult to use my application. Openweather has limited weather icons available with the free API. The icons will display base on the weather condition but may not be exactly matching to the weather description.

![image](https://github.com/YianSaechao/new-project-weather-app/assets/87401359/fd39baf3-37be-4e24-9de5-5a58f6380480)
![image](https://github.com/YianSaechao/new-project-weather-app/assets/87401359/6ba66d5a-9bd7-4cd8-81d0-4e70ce0d695e)
![image](https://github.com/YianSaechao/new-project-weather-app/assets/87401359/0b26e430-c90d-4e40-80f5-272e63d1a76a)
![image](https://github.com/YianSaechao/new-project-weather-app/assets/87401359/0ce46b18-78ff-4da8-b4d5-ca657bb4c691)



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
