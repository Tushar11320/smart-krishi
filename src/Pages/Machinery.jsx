import React, { useState, useEffect } from "react";

export default function Machinery() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  // GET DATA
  const fetchBookings = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/machinery");
      const data = await res.json();

      setBookings(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // BOOK MACHINE
  const bookMachine = async (name) => {
    try {
      const res = await fetch("http://localhost:5000/book-machine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ machine: name }),
      });

      const data = await res.json();

      alert(data.message);

      // 🔥 IMPORTANT: refresh from backend
      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  const machines = [
    { name: "Tractor", icon: "🚜", color: "bg-green-600" },
    { name: "JCB", icon: "🏗️", color: "bg-yellow-600" },
    { name: "Harvester", icon: "🌾", color: "bg-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        🚜 Book Your Machinery
      </h1>

      {/* Machines */}
      <div className="grid md:grid-cols-3 gap-6">

        {machines.map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow text-center">

            <h2 className="text-3xl">{m.icon}</h2>
            <h3 className="text-xl font-bold">{m.name}</h3>

            <button
              onClick={() => bookMachine(m.name)}
              className={`${m.color} text-white px-4 py-2 mt-4 rounded`}
            >
              Book Now
            </button>

          </div>
        ))}

      </div>

      {/* BOOKINGS */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">📦 Booked Machines</h2>

        {loading ? (
          <p>Loading...</p>
        ) : bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          bookings.map((b, i) => (
            <div key={i} className="bg-white p-3 mb-2 rounded shadow">
              🚜 {b.machine}
            </div>
          ))
        )}
      </div>

    </div>
  );
}