import React, { useEffect, useState } from "react";
import { CloudSun, Thermometer, Wind, Droplets } from "lucide-react";

export default function Weather() {
  const [weather, setWeather] = useState({
    city: "Bhopal",
    temp: 31,
    condition: "Clear Sky",
    humidity: 42,
    wind: 14,
  });

  useEffect(() => {
    // Future API fetch can be added here
  }, []);

  return (
    <div className="w-full min-h-screen min-h-[100dvh] bg-gradient-to-br from-blue-50 via-white to-green-100 px-6 py-12">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black text-blue-900">
            Weather Forecast
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Live weather updates for farmers
          </p>
        </div>

        {/* Main Weather Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-10">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {weather.city}
            </h2>
            <p className="text-gray-500 mt-2">{weather.condition}</p>

            <div className="flex items-center gap-4 mt-6">
              <CloudSun size={70} className="text-yellow-500" />
              <span className="text-6xl font-black text-blue-700">
                {weather.temp}°C
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto">

            <div className="bg-blue-50 p-6 rounded-2xl text-center">
              <Thermometer size={32} className="mx-auto text-red-500" />
              <p className="mt-3 text-gray-500">Temperature</p>
              <h3 className="text-2xl font-bold">{weather.temp}°C</h3>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl text-center">
              <Droplets size={32} className="mx-auto text-blue-500" />
              <p className="mt-3 text-gray-500">Humidity</p>
              <h3 className="text-2xl font-bold">{weather.humidity}%</h3>
            </div>

            <div className="bg-yellow-50 p-6 rounded-2xl text-center">
              <Wind size={32} className="mx-auto text-gray-700" />
              <p className="mt-3 text-gray-500">Wind Speed</p>
              <h3 className="text-2xl font-bold">{weather.wind} km/h</h3>
            </div>

          </div>
        </div>

        {/* Forecast */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-green-900 mb-8">
            7-Day Forecast
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg p-6 text-center"
                >
                  <p className="font-semibold text-gray-700">{day}</p>
                  <CloudSun
                    size={38}
                    className="mx-auto my-4 text-yellow-500"
                  />
                  <p className="text-xl font-bold">{30 + i}°C</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}