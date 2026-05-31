import React from "react";
import {
  Tractor,
  CloudSun,
  Wheat,
  IndianRupee,
  Users,
  ShoppingCart,
  Bell,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Sales",
    value: "₹ 2,45,000",
    icon: <IndianRupee size={32} />,
    color: "from-green-500 to-green-700",
  },

  {
    title: "Machinery Rentals",
    value: "125",
    icon: <Tractor size={32} />,
    color: "from-yellow-500 to-orange-500",
  },

  {
    title: "Crop Orders",
    value: "340",
    icon: <Wheat size={32} />,
    color: "from-emerald-500 to-teal-600",
  },

  {
    title: "Active Farmers",
    value: "1,250",
    icon: <Users size={32} />,
    color: "from-blue-500 to-indigo-600",
  },
];

const activities = [
  "New tractor booking received",
  "Wheat order delivered successfully",
  "Weather alert for heavy rainfall",
  "New farmer joined marketplace",
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">

        <div>
          <h1 className="text-5xl font-black text-green-900">
            Smart Krishi Dashboard
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Welcome back 👋 Manage your agriculture business smartly.
          </p>
        </div>

        {/* Notification */}
        <button className="mt-6 md:mt-0 bg-white shadow-xl p-4 rounded-2xl hover:scale-105 transition">

          <Bell size={28} className="text-green-700" />

        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${item.color} text-white rounded-3xl p-8 shadow-2xl hover:-translate-y-2 transition duration-300`}
          >

            <div className="flex justify-between items-center">

              <div>

                <p className="text-lg opacity-90">
                  {item.title}
                </p>

                <h2 className="text-4xl font-black mt-3">
                  {item.value}
                </h2>

              </div>

              <div className="bg-white/20 p-4 rounded-2xl">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mt-12">

        {/* Weather Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <div className="flex justify-between items-center">

            <h2 className="text-3xl font-bold text-gray-900">
              Weather Update
            </h2>

            <CloudSun
              size={40}
              className="text-yellow-500"
            />

          </div>

          <div className="mt-8">

            <h1 className="text-7xl font-black text-green-700">
              32°C
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Sunny • Bhopal, Madhya Pradesh
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">

              <div className="bg-green-50 p-5 rounded-2xl">

                <p className="text-gray-500">
                  Humidity
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  65%
                </h3>

              </div>

              <div className="bg-green-50 p-5 rounded-2xl">

                <p className="text-gray-500">
                  Wind
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  12 km/h
                </h3>

              </div>

            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:col-span-2">

          <div className="flex justify-between items-center">

            <h2 className="text-3xl font-bold text-gray-900">
              Recent Activities
            </h2>

            <button className="flex items-center gap-2 text-green-700 font-semibold hover:text-green-900 transition">

              View All

              <ArrowUpRight size={20} />

            </button>

          </div>

          <div className="mt-8 space-y-5">

            {activities.map((activity, index) => (

              <div
                key={index}
                className="flex items-center justify-between bg-green-50 hover:bg-green-100 transition p-5 rounded-2xl"
              >

                <div className="flex items-center gap-4">

                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>

                  <p className="text-lg font-medium">
                    {activity}
                  </p>

                </div>

                <span className="text-gray-500 text-sm">
                  Just Now
                </span>

              </div>

            ))}
          </div>
        </div>
      </div>

      {/* Marketplace Overview */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">

        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:-translate-y-2 transition">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              Machinery Rentals
            </h2>

            <Tractor
              size={36}
              className="text-yellow-500"
            />

          </div>

          <p className="text-gray-500 mt-5 leading-7">
            Manage tractor and farming equipment rentals with ease.
          </p>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-bold transition">
            Manage Rentals
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:-translate-y-2 transition">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              Crop Marketplace
            </h2>

            <Wheat
              size={36}
              className="text-green-600"
            />

          </div>

          <p className="text-gray-500 mt-5 leading-7">
            Buy and sell crops directly from verified farmers.
          </p>

          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition">
            Explore Crops
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 hover:-translate-y-2 transition">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              Orders
            </h2>

            <ShoppingCart
              size={36}
              className="text-blue-500"
            />

          </div>

          <p className="text-gray-500 mt-5 leading-7">
            Track customer orders and monitor marketplace sales.
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition">
            View Orders
          </button>
        </div>

      </div>
    </div>
  );
}