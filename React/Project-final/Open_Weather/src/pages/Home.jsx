import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [city, setCity] = useState("");
  const [citydata,setCityData] = useState("");
  const [weather,setWeather] = useState('')
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    const handle = async()=>{
        const respond = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=kathmandu,NP&limit=1&appid=${apiKey}`)
        console.log(respond.data);
        setCityData(respond.data[0]);

        const setGeo = respond.data[0]
        console.log(setGeo.lon)


        const respondData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${setGeo.lat}&lon=${setGeo.lon}&appid=${apiKey}&units=metric`);
        setWeather(respondData.data)
        console.log(respondData)

    }

    useEffect(()=>{
        handle();
    },[])






  return (
    <div className="bg-[#d9e3f8] py-5 h-screen">
      <form
        
        className="flex justify-center gap-4 items-center"
      >
        <input
          type="text"
          placeholder="Search another city"
          className="bg-blue-50 shadow-sm py-2 rounded-3xl px-4 outline-none"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white text-sm rounded-3xl shadow-xl"
        >
          Search
        </button>
      </form>

      <div className="flex flex-col justify-center my-5">
        <div className="flex flex-col items-center">
            <p className=" text-4xl font-bold text-blue-600 ">{citydata.name}</p>
            <p className=" text-8xl">{weather.main?.temp}</p>
            <p></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
