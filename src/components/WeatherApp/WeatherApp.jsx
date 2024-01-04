import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import humidity_icon from '../assets/humidity.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'


const WeatherApp = () => {
    let api_key = "5df1405048befeeb66603bffa468c0aa"   
    const [wicon, setWicon] = useState(cloud_icon)

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value===""){
            return 0
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url)
        let data = await response.json()

        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-velocity")
        const temp = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")
        
        humidity[0].innerHTML = data.main.humidity+"%"
        wind[0].innerHTML = data.wind.speed+"km/h"
        temp[0].innerHTML = data.main.temp+"°C"
        location[0].innerHTML = data.name

        if(data.weather[0].icon==="01d" || data.weather[0].icon ==="01n"){
            setWicon(clear_icon)
        }
        else if(data.weather[0].icon==="01d" || data.weather[0].icon ==="01n")

    }

    return(
        <div className= 'container'>
            <div className='top-bar'>
                <input type="text" className= "cityInput" placeholder= "Search" />
                <div className='search-icon' onClick={() => {search()}}>
                    <img src={search_icon} alt=""/>
                </div>
            </div>
            <div className="weather-image">
                <img src= {wicon} alt="" />
            </div>
            <div className='weather-temp'>24°C</div>
            <div className='weather-location'>London</div>
            <div className='data-container'>
                <div className='element'>
                    <img src={humidity_icon} alt="" className='icon' />
                    <div className='data'>
                        <div className='humidity-percent'>64%</div>
                        <div className='text'>Humedad</div>
                    </div>
                        
                </div>
                <div className='element'>
                    <img src= {wind_icon} alt="" className='icon' />
                    <div className='data'>
                        <div className='wind-velocity'>18km/h</div>
                        <div className='text'>Velocidad del viento</div> 
                    </div>
                        
                </div>
            </div>


        </div>
    )
}

export default WeatherApp