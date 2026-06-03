import { useEffect, useState } from "react";
import axios from "axios";

export default function WaterSupply() {
  let [allProducts, setAllProducts] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  // GET DATA

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        let res = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=6b3c3baebb435dc6f286b324d8bea1b8");
        let data = await res.json();

        setAllProducts(res.data);
      } catch (error) {
        console.log(error);
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