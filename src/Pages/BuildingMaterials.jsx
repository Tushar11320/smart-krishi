import { useState, useEffect } from "react";

export default function BuildingMaterials() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);

      const res = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );

      const json = await res.json();
      setData(json);

      console.log("Data Fetched Successfully");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <center>
        <h1 className="text-3xl font-bold mb-4">
          Building Materials
        </h1>
      </center>

      <div className="grid grid-cols-3 gap-4">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          data.map((item) => (
            <div key={item.id} className="border p-3 rounded">
              <img src={item.image} className="w-32 h-32" />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}