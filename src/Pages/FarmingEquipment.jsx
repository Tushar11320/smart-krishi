import { useState, useEffect } from "react";
import axios from "axios";

export default function FarmingEquipment() {
  let [allProducts, setAllProducts] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        let res = await axios.get(
          "https://fakestoreapi.com/products"
        );

        setAllProducts(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">
        Farming Equipment
      </h2>

      {isLoading ? (
        <h1 className="text-center text-2xl">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-contain"
              />

              <h3 className="font-bold mt-3 line-clamp-2">
                {p.title}
              </h3>

              <p className="text-green-700 font-bold text-lg mt-2">
                ${p.price}
              </p>

              <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}