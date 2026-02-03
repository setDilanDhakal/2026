import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [city, setCity] = useState("");
  const [citydata, setCityData] = useState("");
  const [weather, setWeather] = useState("");
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const handle = async () => {
    const respond = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=kathmandu,NP&limit=1&appid=${apiKey}`,
    );
    console.log(respond.data);
    setCityData(respond.data[0]);

    const setGeo = respond.data[0];
    console.log(setGeo.lon);

    const respondData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${setGeo.lat}&lon=${setGeo.lon}&appid=${apiKey}&units=metric`,
    );
    setWeather(respondData.data);
    console.log(respondData);
  };

  useEffect(() => {
    handle();
  }, []);

  return (
    <div className="bg-linear-to-br flex flex-col justify-center  from-blue-50 via-indigo-50 to-purple-50 py-5 h-screen">
      <form className="flex justify-center gap-4 items-center">
        <input
          type="text"
          placeholder="Search another city"
          className="bg-white/60 backdrop-blur-sm rounded-3xl py-2 w-60 text-center shadow-lg"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white text-sm rounded-3xl shadow-xl"
        >
          Search
        </button>
      </form>

      <div className="flex flex-col justify-center  my-5">
        <div className="flex flex-col items-center ">
          <h1 className="text-5xl font-bold  mb-2">{weather.name}</h1>
          <p className=" text-xl mb-4">{weather.sys?.country}</p>
          <p className="text-3xl font-semibold">{weather.main?.temp} °C</p>
          <p className="capitalize">{weather.weather?.[0]?.description}</p>
          <div className="flex gap-5 m-5">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg">
              <p className="text-gray-500 text-sm mb-2">Feels Like</p>
              <p className="text-gray-800 text-3xl font-semibold">
                {Math.round(weather.main?.feels_like)}°
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg">
              <p className="text-gray-500 text-sm mb-2">Humidity</p>
              <p className="text-gray-800 text-3xl font-semibold">
                {weather.main?.humidity}%
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg">
              <p className="text-gray-500 text-sm mb-2">Wind Speed</p>
              <p className="text-gray-800 text-3xl font-semibold">
                {Math.round(weather.wind?.speed)} m/s
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg">
              <p className="text-gray-500 text-sm mb-2">Pressure</p>
              <p className="text-gray-800 text-3xl font-semibold">
                {weather.main?.pressure} hPa
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;
