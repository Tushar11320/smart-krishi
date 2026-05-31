import React from "react";

export default function Sidebar() {
  return (
    <div className="w-72 h-screen bg-green-950 text-white p-6 shadow-2xl">

      <h2 className="text-3xl font-bold mb-10">
        Dashboard
      </h2>

      <ul className="space-y-5 text-lg">

        <li className="hover:text-green-400 cursor-pointer transition">
          Overview
        </li>

        <li className="hover:text-green-400 cursor-pointer transition">
          Weather
        </li>

        <li className="hover:text-green-400 cursor-pointer transition">
          Market Prices
        </li>

        <li className="hover:text-green-400 cursor-pointer transition">
          Machinery
        </li>

      </ul>
    </div>
  );
}