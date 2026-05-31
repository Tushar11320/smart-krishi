import React from "react";

export default function ProductCard({ image, name, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800">
          {name}
        </h3>

        <p className="text-green-700 font-semibold mt-2">
          ₹{price}
        </p>

        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl">
          Buy Now
        </button>
      </div>
    </div>
  );
}