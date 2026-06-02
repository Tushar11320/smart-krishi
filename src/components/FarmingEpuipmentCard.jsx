import React from "react";

export default function FarmingEquipmentCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-green-700">{name}</h2>
        <p className="text-lg font-semibold text-gray-700 mt-2">{price}</p>

        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Book Now
        </button>
      </div>
    </div>
  );
}