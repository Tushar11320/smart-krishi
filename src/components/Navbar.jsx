import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Tractor,
  LandPlot,
  Wheat,
  Milk,
  Tent,
  Hammer,
  CloudSun,
  ShoppingCart,
  User,
  Leaf
} from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">

        <h1 className="text-xl font-bold">
          <Link to="/" className="flex items-center gap-2">
            <Tractor size={22} />
            Jay Kishan
          </Link>
        </h1>

        <ul className="flex space-x-6 items-center text-sm font-medium">

          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-yellow-200">
              <Home size={18} /> Home
            </Link>
          </li>

          <li>
            <Link to="/machinery" className="flex items-center gap-1 hover:text-yellow-200">
              <Tractor size={18} /> Machinery
            </Link>
          </li>

          <li>
            <Link to="/landselling" className="flex items-center gap-1 hover:text-yellow-200">
              <LandPlot size={18} /> Land
            </Link>
          </li>

          {/* 🌿 Fertilizer FIX */}
          <li>
            <Link to="/fertilizers" className="flex items-center gap-1 hover:text-yellow-200">
              <Leaf size={18} /> Fertilizers
            </Link>
          </li>

          <li>
            <Link to="/farming-crop" className="flex items-center gap-1 hover:text-yellow-200">
              <Wheat size={18} /> Crops
            </Link>
          </li>

          <li>
            <Link to="/milk" className="flex items-center gap-1 hover:text-yellow-200">
              <Milk size={18} /> Milk
            </Link>
          </li>

          <li>
            <Link to="/building-materials" className="flex items-center gap-1 hover:text-yellow-200">
              <Hammer size={18} /> Building Materials
            </Link>
          </li>

          <li>
            <Link to="/tent-booking" className="flex items-center gap-1 hover:text-yellow-200">
              <Tent size={18} /> Tent
            </Link>
          </li>

          <li>
            <Link to="/weather" className="flex items-center gap-1 hover:text-yellow-200">
              <CloudSun size={18} /> Weather
            </Link>
          </li>

          <li>
            <Link to="/cart" className="flex items-center gap-1 hover:text-yellow-200">
              <ShoppingCart size={18} /> Cart
            </Link>
          </li>

          <li>
            <Link to="/account" className="flex items-center gap-1 hover:text-yellow-200">
              <User size={18} /> Account
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;