import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import {
  Tractor,
  Wheat,
  CloudSun,
  Milk,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const categories = [
    {
      icon: Tractor,
      bg: "bg-green-100",
      hover: "group-hover:bg-green-500",
      text: "text-green-700",
      title: "Machinery",
      desc: "Rent and buy modern farming equipment.",
    },
    {
      icon: Wheat,
      bg: "bg-yellow-100",
      hover: "group-hover:bg-yellow-500",
      text: "text-yellow-700",
      title: "Crops",
      desc: "Buy and sell fresh crops directly.",
    },
    {
      icon: CloudSun,
      bg: "bg-blue-100",
      hover: "group-hover:bg-blue-500",
      text: "text-blue-700",
      title: "Weather",
      desc: "Real-time weather forecasting updates.",
    },
    {
      icon: Milk,
      bg: "bg-pink-100",
      hover: "group-hover:bg-pink-500",
      text: "text-pink-700",
      title: "Dairy",
      desc: "Fresh organic milk marketplace.",
    },
  ];

  return (
    <div className="w-full min-h-screen min-h-[100dvh] bg-gradient-to-br from-green-50 via-white to-green-100 overflow-x-hidden">

      <Hero />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24 min-h-[100dvh] flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-green-900">
            Explore Categories
          </h2>
          <p className="text-gray-600 mt-5 text-lg">
            Smart services for modern agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-4 transition-all duration-500 text-center group"
              >
                <div
                  className={`w-24 h-24 flex items-center justify-center rounded-full mx-auto transition-all duration-500 ${item.bg} ${item.hover}`}
                >
                  <Icon
                    size={50}
                    className={`${item.text} group-hover:text-white transition-all duration-500`}
                  />
                </div>

                <h3 className="text-2xl font-bold mt-8 text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-4">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trending Products */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24 min-h-[100dvh] flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-green-900">
              Trending Products
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Best products for smart farming
            </p>
          </div>

          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl text-lg font-semibold shadow-xl transition">
            View All
            <ArrowRight size={22} />
          </button>
        </div>
      </section>

    </div>
  );
}