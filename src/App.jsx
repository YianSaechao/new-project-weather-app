import { useState } from 'react'
import './App.css'
import CurrentWeather from './component/CurrentWeather'
import HourlyWeather from './component/HourlyWeather'
import Weekly from './component/Weekly'

function App() {
  const [city, setCity] = useState('')

  return (

  <div className='App'>
    <CurrentWeather setCity={setCity} />
    <HourlyWeather city={city} />
    <Weekly city={city} />
  </div>
  )
}

export default App