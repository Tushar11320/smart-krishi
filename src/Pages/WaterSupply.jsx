import { useEffect, useState } from "react";
import axios from "axios";

export default function WaterSupply() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Custom Water Supply Data
  const waterData = [
    {
      id: 501,
      title: "RO Drinking Water (20L Can)",
      category: "Drinking Water",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1582719478185-3a8c0f6f2a10",
    },
    {
      id: 502,
      title: "Borewell Water Supply",
      category: "Agriculture Water",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1581090700227-1e8e3a8c9b7a",
    },
    {
      id: 503,
      title: "Tank Water Supply (5000L)",
      category: "Bulk Water",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    },
    {
      id: 504,
      title: "Farm Irrigation Water",
      category: "Irrigation",
      price: 800,
      image:
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2",
    },
    {
      id: 505,
      title: "Municipal Water Connection",
      category: "Domestic Water",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1564417947365-8dbc9d0e6b88",
    },
  ];

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const res = await axios.get(
          "https://fakestoreapi.com/products"
        );

        // API + CUSTOM WATER DATA MERGE
        setAllProducts([...waterData, ...res.data]);
      } catch (error) {
        console.log("API Error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen p-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">
          Water Supply Services
        </h1>
        <p className="text-gray-600 mt-2">
          Drinking Water | Farm Irrigation | Tank Supply | Borewell Water
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <center className="col-span-full">
            <h2 className="text-2xl font-bold text-blue-800">
              Loading Water Services...
            </h2>
          </center>
        ) : (
          allProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-lg">{p.title}</h3>

                <h4 className="text-sm text-gray-500">
                  {p.category}
                </h4>

                <p className="text-blue-700 font-bold text-xl mt-3">
                  ₹{p.price}
                </p>

                <div className="flex gap-3 mt-4">
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">
                    Book Water
                  </button>

                  <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded-lg">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}