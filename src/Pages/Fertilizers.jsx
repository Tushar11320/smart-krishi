import { useState, useEffect } from "react";
import axios from "axios";

export default function Fertilizer() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const res = await axios.get(
          "https://fakestoreapi.com/products/category/electronics"
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
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Fertilizers</h2>

      <div className="grid grid-cols-3 gap-4">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          allProducts.map((p) => (
            <div key={p.id} className="border p-3 rounded">
              <img src={p.image} alt={p.title} className="w-32 h-32" />
              <h3 className="font-bold">{p.title}</h3>
              <p>${p.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}