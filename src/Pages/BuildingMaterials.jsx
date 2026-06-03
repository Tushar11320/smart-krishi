import { useState, useEffect } from "react";

export default function BuildingMaterials() {
  const [buildingMaterialsData, setBuildingMaterialsData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const res = await fetch("http://localhost:5000/buildingMaterials");

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setBuildingMaterialsData(data);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🏗️ Building Materials
      </h1>

      {loading ? (
        <div className="text-center text-xl">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {buildingMaterialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded"
              />

              <h3 className="text-xl font-semibold mt-3">
                {item.title}
              </h3>

              <p className="text-green-600 font-bold mt-2">
                ₹{item.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}