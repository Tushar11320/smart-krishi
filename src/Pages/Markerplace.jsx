import React from "react";
import {
  Search,
  ShoppingCart,
  Star,
  Tractor,
  Wheat,
  Milk,
  MapPin,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Modern Tractor",
    category: "Machinery",
    price: "₹ 4,50,000",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
  },

  {
    id: 2,
    name: "Fresh Organic Wheat",
    category: "Crop",
    price: "₹ 2,500",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
  },

  {
    id: 3,
    name: "Pure Organic Milk",
    category: "Dairy",
    price: "₹ 70 / Litre",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b",
  },

  {
    id: 4,
    name: "Premium Farming Land",
    category: "Land",
    price: "₹ 45,00,000",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

      {/* Hero Section */}
      <div className="relative h-[65vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
          alt="Marketplace"
          className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">

          <h1 className="text-6xl md:text-7xl font-black leading-tight">
            Smart Krishi <br />
            Marketplace
          </h1>

          <p className="max-w-3xl mt-6 text-lg text-gray-200 leading-8">
            Buy machinery, crops, dairy products and
            farming essentials directly from trusted sellers.
          </p>

          {/* Search */}
          <div className="mt-10 flex items-center bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl">

            <div className="px-5 text-gray-500">
              <Search size={24} />
            </div>

            <input
              type="text"
              placeholder="Search products, machinery, crops..."
              className="flex-1 px-4 py-5 text-black outline-none text-lg"
            />

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-5 text-lg font-bold transition">
              Search
            </button>

          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-black text-green-900">
            Marketplace Categories
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Explore all smart agriculture services
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {/* Category Card */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl hover:-translate-y-3 transition text-center group">

            <div className="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:bg-yellow-500 transition">

              <Tractor
                size={50}
                className="text-yellow-700 group-hover:text-white"
              />

            </div>

            <h3 className="text-2xl font-bold mt-8">
              Machinery
            </h3>

            <p className="text-gray-500 mt-4">
              Tractors and farming equipment.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow-2xl hover:-translate-y-3 transition text-center group">

            <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-500 transition">

              <Wheat
                size={50}
                className="text-green-700 group-hover:text-white"
              />

            </div>

            <h3 className="text-2xl font-bold mt-8">
              Crops
            </h3>

            <p className="text-gray-500 mt-4">
              Fresh organic agricultural products.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow-2xl hover:-translate-y-3 transition text-center group">

            <div className="bg-pink-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:bg-pink-500 transition">

              <Milk
                size={50}
                className="text-pink-700 group-hover:text-white"
              />

            </div>

            <h3 className="text-2xl font-bold mt-8">
              Dairy Products
            </h3>

            <p className="text-gray-500 mt-4">
              Pure milk and organic dairy items.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow-2xl hover:-translate-y-3 transition text-center group">

            <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-500 transition">

              <MapPin
                size={50}
                className="text-blue-700 group-hover:text-white"
              />

            </div>

            <h3 className="text-2xl font-bold mt-8">
              Land Selling
            </h3>

            <p className="text-gray-500 mt-4">
              Verified farmland and agriculture plots.
            </p>

          </div>

        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-8 pb-24">

        <div className="flex justify-between items-center mb-14">

          <div>

            <h2 className="text-5xl font-black text-green-900">
              Trending Products
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Best products for smart farming
            </p>

          </div>

          <button className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl text-lg font-semibold shadow-xl transition">

            View All

            <ArrowRight size={22} />

          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-10">

          {products.map((item) => (

            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex justify-between items-center">

                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-1">

                    <Star
                      size={18}
                      className="text-yellow-500 fill-yellow-500"
                    />

                    <span className="font-bold">
                      {item.rating}
                    </span>

                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-5">
                  {item.name}
                </h3>

                <p className="text-3xl font-black text-green-700 mt-5">
                  {item.price}
                </p>

                <button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-bold shadow-lg flex items-center justify-center gap-3 transition">

                  <ShoppingCart size={22} />

                  Add To Cart

                </button>
              </div>
            </div>

          ))}
        </div>
      </section>
    </div>
  );
}