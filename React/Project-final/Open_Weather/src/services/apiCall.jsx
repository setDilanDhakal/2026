 import axios from 'axios'
 const apiKey = import.meta.env.VITE_WEATHER_API_KEY;


 export const getData = async(city)=>{
    const respond= await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
    return respond;
 }

 export const getDetails = async(lat,lon)=>{
    const respondDetails = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    return respondDetails;
 }