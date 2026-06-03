import React, { useState, useEffect } from "react";

export default function Machinery() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const machines = [
    {
      name: "Tractor",
      icon: "🚜",
      color: "bg-green-600",
    },
    {
      name: "Harvester",
      icon: "🌾",
      color: "bg-yellow-600",
    },
    {
      name: "Cultivator",
      icon: "⚙️",
      color: "bg-blue-600",
    },
    {
      name: "Seeder",
      icon: "🌱",
      color: "bg-purple-600",
    },
    {
      name: "Rotavator",
      icon: "🔄",
      color: "bg-red-600",
    },
    {
      name: "Sprayer",
      icon: "💧",
      color: "bg-indigo-600",
    },
  ];

  const fetchBookings = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/machinery");

      if (!res.ok) {
        throw new Error("Failed to fetch bookings");
      }

      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const bookMachine = async (name) => {
    try {
      const res = await fetch("http://localhost:5000/machinery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          machine: name,
        }),
      });

      const data = await res.json();

      alert(data.message || `${name} booked successfully`);

      fetchBookings();
    } catch (err) {
      console.error("Booking Error:", err);
      alert("Booking failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        🚜 Book Your Machinery
      </h1>

      {/* Machine Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {machines.map((m, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <h2 className="text-5xl mb-3">{m.icon}</h2>

            <h3 className="text-xl font-bold mb-4">{m.name}</h3>

            <button
              onClick={() => bookMachine(m.name)}
              className={`${m.color} text-white px-5 py-2 rounded-lg hover:opacity-90`}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Booked Machines */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          📦 Booked Machines
        </h2>

        {loading ? (
          <p>Loading...</p>
        ) : bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          <div className="space-y-3">
            {bookings.map((b, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow"
              >
                🚜 {b.machine}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}