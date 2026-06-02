import React from "react";

export default function FarmingEquipment() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700">
        Farming Equipment
      </h1>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white shadow-lg rounded-xl p-4">
          <h2 className="text-xl font-semibold">Tractor</h2>
          <p>₹7,50,000</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-4">
          <h2 className="text-xl font-semibold">Rotavator</h2>
          <p>₹85,000</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-4">
          <h2 className="text-xl font-semibold">Harvester</h2>
          <p>₹15,00,000</p>
        </div>

      </div>
    </div>
  );
}