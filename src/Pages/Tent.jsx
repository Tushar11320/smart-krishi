import { useEffect, useState } from "react";
import axios from "axios";

export default function TentBooking() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Custom Tent Booking Data
  const tentData = [
    {
      id: 301,
      title: "Wedding Tent Setup",
      category: "Wedding",
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1523438097201-512ae7d59c6b",
    },
    {
      id: 302,
      title: "Party Tent (100 People)",
      category: "Event",
      price: 18000,
      image:
        "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79",
    },
    {
      id: 303,
      title: "Farm Event Tent",
      category: "Agriculture Event",
      price: 12000,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 304,
      title: "Luxury Outdoor Tent",
      category: "Luxury",
      price: 35000,
      image:
        "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    },
  ];

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const res = await axios.get(
          "https://fakestoreapi.com/products"
        );

        // API + CUSTOM DATA MERGE
        setAllProducts([...tentData, ...res.data]);
      } catch (error) {
        console.log("API Error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div className="bg-yellow-50 min-h-screen p-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-700">
          Tent Booking Services
        </h1>
        <p className="text-gray-600 mt-2">
          Wedding | Party | Farm Events | Outdoor Tents
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <center className="col-span-full">
            <h2 className="text-2xl font-bold text-yellow-700">
              Loading Tents...
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

                <p className="text-yellow-600 font-bold text-xl mt-3">
                  ₹{p.price}
                </p>

                <div className="flex gap-3 mt-4">
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg">
                    Book Now
                  </button>

                  <button className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded-lg">
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