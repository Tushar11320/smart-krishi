import { useEffect, useState } from "react";
import axios from "axios";

export default function LandSelling() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const landData = [
    {
      id: 201,
      title: "Agricultural Land - 2 Acre",
      category: "Farmland",
      price: 500000,
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    },
    {
      id: 202,
      title: "Irrigated Farm Plot",
      category: "Land",
      price: 750000,
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    },
  ];

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const res = await axios.get("https://fakestoreapi.com/products");

        setAllProducts([...landData, ...res.data]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        allProducts.map((item) => (
          <div key={item.id} className="border p-3 rounded shadow">
            <img
              src={item.image}
              className="h-40 w-full object-cover rounded"
              alt={item.title}
            />
            <h2 className="font-bold mt-2">{item.title}</h2>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-green-600 font-bold">₹ {item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}