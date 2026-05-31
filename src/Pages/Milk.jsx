import { useEffect, useState } from "react";
import axios from "axios";

export default function MilkSelling() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Custom Milk Data
  const milkData = [
    {
      id: 401,
      title: "Fresh Cow Milk",
      category: "Milk",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b",
    },
    {
      id: 402,
      title: "Buffalo Milk",
      category: "Milk",
      price: 70,
      image:
        "https://images.unsplash.com/photo-1582719478185-2b3e2b1d7b10",
    },
    {
      id: 403,
      title: "Organic Farm Milk",
      category: "Organic",
      price: 90,
      image:
        "https://images.unsplash.com/photo-1604908177522-0407d3c0c0f6",
    },
    {
      id: 404,
      title: "Milk Packet (1L)",
      category: "Packaged Milk",
      price: 55,
      image:
        "https://images.unsplash.com/photo-1628088062854-d1870b4553da",
    },
    {
      id: 405,
      title: "Cold Storage Milk",
      category: "Dairy",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1615486363973-9b8c6b3d1c6b",
    },
  ];

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const res = await axios.get(
          "https://fakestoreapi.com/products"
        );

        // API + CUSTOM MILK DATA MERGE
        setAllProducts([...milkData, ...res.data]);
      } catch (error) {
        console.log("API Error:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">
          Milk Selling Products
        </h1>
        <p className="text-gray-600 mt-2">
          Fresh Cow Milk | Buffalo Milk | Organic Dairy Products
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <center className="col-span-full">
            <h2 className="text-2xl font-bold text-blue-700">
              Loading Milk Products...
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

                <p className="text-blue-600 font-bold text-xl mt-3">
                  ₹{p.price}
                </p>

                <div className="flex gap-3 mt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Buy Milk
                  </button>

                  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
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