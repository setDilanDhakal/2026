import axios from 'axios'
import {useEffect,useState} from 'react'

function App() {
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const [lat,setLat] = useState('');
const [long,setLong] = useState('')

const handle = async ()=>{
  const geoRes = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${"Kathmandu"},NP&limit=1&appid=${apiKey}`)

  const lat = geoRes.data[0].lat;
  const lon = geoRes.data[0].lon;

  // 2. Get weather using coordinates
  const weatherRes = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );

  console.log(weatherRes.data);



}

useEffect(()=>{
  handle();
},[])



  return (
    <>

    </>
  )
}

export default App

//http://api.openweathermap.org/geo/1.0/direct?q=${Kathmandu},NP&limit=1&appid=${apiKey}`