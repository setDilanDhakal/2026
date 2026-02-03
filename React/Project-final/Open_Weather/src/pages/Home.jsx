import { useState, useEffect } from "react";
import { getData, getDetails } from "../services/apiCall";

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const handle = async (cityName) => {
    const searchCity = cityName || "Kawasoti";

    const respond = await getData(searchCity);
    const { lat, lon } = respond.data[0];

    const respondData = await getDetails(lat, lon);
    setWeather(respondData.data);
  };

  useEffect(() => {
    handle(); 
  }, []);

  return (
    <div className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col justify-center py-5 h-screen">
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handle(city);
        }}
        className="flex justify-center gap-4 items-center"
      >
        <input
          type="text"
          placeholder="Search another city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-white/60 backdrop-blur-sm rounded-3xl py-2 w-60 text-center shadow-lg outline-none"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white text-sm rounded-3xl shadow-xl"
        >
          Search
        </button>
      </form>

      <div className="flex flex-col items-center my-6">
        <h1 className="text-5xl font-bold mb-2">{weather.name}</h1>
        <p className="text-xl mb-4">{weather.sys?.country}</p>

        <p className="text-3xl font-semibold">
          {Math.round(weather.main?.temp)} °C
        </p>
        <p className="capitalize">{weather.weather?.[0]?.description}</p>

        <div className="flex gap-5 m-5 flex-wrap justify-center">
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
  );
}

export default Home;
