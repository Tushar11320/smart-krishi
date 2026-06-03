import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const searchRoutes = {
    machinery: "/machinery",
    weather: "/weather",
    crop: "/farmingcrop",
    crops: "/farmingcrop",
    fertilizer: "/fertilizer",
    fertilizers: "/fertilizer",
    land: "/landselling",
    milk: "/milk",
    tent: "/tent",
    building: "/buildingmaterials",
    materials: "/buildingmaterials",
  };

  const performSearch = () => {
    const value = search.toLowerCase().trim();

    if (!value) {
      alert("Please enter something to search");
      return;
    }

    const route = searchRoutes[value];

    if (route) {
      navigate(route);
    } else {
      alert(`No page found for "${value}"`);
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  };

  const handleExplore = () => {
    navigate("/machinery");
  };

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100">

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search: machinery, weather, crop, fertilizer..."
            className="flex-1 px-5 py-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-green-500 shadow-lg"
          />

          <button
            onClick={performSearch}
            className="bg-green-600 text-white px-6 py-4 rounded-xl hover:bg-green-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-green-700 leading-tight">
            Smart Farming <br />
            Future of Agriculture 🌱
          </h1>

          <p className="mt-6 text-lg text-gray-700">
            Modern solutions for farmers with weather updates,
            smart machinery, crop suggestions, and online marketplace.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handleExplore}
              className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg"
            >
              Explore
            </button>

            <button
              onClick={handleLearnMore}
              className="border-2 border-green-600 text-green-700 px-6 py-3 rounded-xl hover:bg-green-100 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          src="https://img.magnific.com/free-photo/tractor-working-green-field_23-2151983626.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Smart Farming"
          className="md:w-1/2 mt-10 md:mt-0 rounded-3xl shadow-2xl"
        />
      </section>

      {/* Footer */}
      <section className="bg-green-700 text-white py-12 text-center">
        <h2 className="text-3xl font-bold">
          Grow Smarter, Harvest Better 🚜
        </h2>
      </section>
    </div>
  );
}