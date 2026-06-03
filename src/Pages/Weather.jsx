import React, { useEffect, useState } from "react";
import {
  CloudSun,
  Thermometer,
  Wind,
  Droplets,
  Search,
} from "lucide-react";

export default function Weather() {
  const API_KEY = "YOUR_OPENWEATHER_API_KEY";

  const [city, setCity] = useState("Bhopal");
  const [loading, setLoading] = useState(false);

  const [weather, setWeather] = useState({
    city: "",
    temp: "",
    condition: "",
    humidity: "",
    wind: "",
  });

  const fetchWeather = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();

      if (data.cod !== 200) {
        alert("City not found");
        return;
      }

      setWeather({
        city: data.name,
        temp: data.main.temp,
        condition: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      });
    } catch (error) {
      console.log(error);
      alert("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-blue-900">
            Live Weather Forecast
          </h1>

          <p className="text-gray-600 mt-3">
            Check real-time weather updates for farmers
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City Name"
            className="border p-3 rounded-xl w-full sm:w-80 focus:outline-none"
          />

          <button
            onClick={fetchWeather}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <Search size={18} />
            Search
          </button>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-700">
              Loading Weather...
            </h2>
          </div>
        ) : (
          <>
            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row justify-between items-center gap-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {weather.city}
                </h2>

                <p className="text-gray-500 mt-2 capitalize">
                  {weather.condition}
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <CloudSun
                    size={70}
                    className="text-yellow-500"
                  />

                  <span className="text-6xl font-black text-blue-700">
                    {weather.temp}°C
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-2xl text-center">
                  <Thermometer
                    size={32}
                    className="mx-auto text-red-500"
                  />

                  <p className="mt-3 text-gray-500">
                    Temperature
                  </p>

                  <h3 className="text-2xl font-bold">
                    {weather.temp}°C
                  </h3>
                </div>

                <div className="bg-green-50 p-6 rounded-2xl text-center">
                  <Droplets
                    size={32}
                    className="mx-auto text-blue-500"
                  />

                  <p className="mt-3 text-gray-500">
                    Humidity
                  </p>

                  <h3 className="text-2xl font-bold">
                    {weather.humidity}%
                  </h3>
                </div>

                <div className="bg-yellow-50 p-6 rounded-2xl text-center">
                  <Wind
                    size={32}
                    className="mx-auto text-gray-700"
                  />

                  <p className="mt-3 text-gray-500">
                    Wind Speed
                  </p>

                  <h3 className="text-2xl font-bold">
                    {weather.wind} km/h
                  </h3>
                </div>
              </div>
            </div>

            {/* Forecast Cards */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-green-900 mb-8">
                Weekly Weather Overview
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg p-5 text-center"
                    >
                      <p className="font-semibold">{day}</p>

                      <CloudSun
                        size={36}
                        className="mx-auto my-3 text-yellow-500"
                      />

                      <p className="text-lg font-bold">
                        {Math.round(Number(weather.temp || 30) + index)}°C
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}