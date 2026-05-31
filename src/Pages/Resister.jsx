import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Phone,
  MapPin,
  Eye,
  EyeOff,
  Tractor,
} from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    village: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Register Data:", formData);

    alert("Registration Successful 🚜");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-yellow-50 flex items-center justify-center px-6 py-16">

      {/* Main Container */}
      <div className="max-w-6xl w-full bg-white rounded-[40px] shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="relative bg-green-900 text-white p-14 flex flex-col justify-center overflow-hidden">

          {/* Background Shapes */}
          <div className="absolute w-96 h-96 bg-green-700 rounded-full opacity-20 -top-20 -left-20"></div>

          <div className="absolute w-80 h-80 bg-yellow-400 rounded-full opacity-10 bottom-0 right-0"></div>

          {/* Content */}
          <div className="relative z-10">

            <div className="bg-white/10 backdrop-blur-lg w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl">

              <Tractor size={50} className="text-yellow-400" />

            </div>

            <h1 className="text-6xl font-black mt-10 leading-tight">

              Smart <br />
              Krishi

            </h1>

            <p className="text-green-100 text-xl mt-8 leading-9 max-w-md">

              Join the future of agriculture.
              Buy crops, machinery, land and
              smart farming services in one platform.

            </p>

            {/* Features */}
            <div className="space-y-5 mt-12">

              <div className="flex items-center gap-4">

                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>

                <p className="text-lg">
                  Smart Farming Marketplace
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>

                <p className="text-lg">
                  AI Agriculture Services
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>

                <p className="text-lg">
                  Live Weather & Market Prices
                </p>

              </div>

            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-12 md:p-16 flex flex-col justify-center">

          <div className="mb-10">

            <h2 className="text-5xl font-black text-green-900">
              Create Account
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Register to access Smart Krishi services.
            </p>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}
            <div className="bg-gray-100 rounded-2xl flex items-center px-5 py-4">

              <User size={24} className="text-gray-500" />

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-transparent w-full ml-4 outline-none text-lg"
                required
              />

            </div>

            {/* Email */}
            <div className="bg-gray-100 rounded-2xl flex items-center px-5 py-4">

              <Mail size={24} className="text-gray-500" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent w-full ml-4 outline-none text-lg"
                required
              />

            </div>

            {/* Phone */}
            <div className="bg-gray-100 rounded-2xl flex items-center px-5 py-4">

              <Phone size={24} className="text-gray-500" />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-transparent w-full ml-4 outline-none text-lg"
                required
              />

            </div>

            {/* Village */}
            <div className="bg-gray-100 rounded-2xl flex items-center px-5 py-4">

              <MapPin size={24} className="text-gray-500" />

              <input
                type="text"
                name="village"
                placeholder="Village / City"
                value={formData.village}
                onChange={handleChange}
                className="bg-transparent w-full ml-4 outline-none text-lg"
                required
              />

            </div>

            {/* Password */}
            <div className="bg-gray-100 rounded-2xl flex items-center px-5 py-4">

              <Lock size={24} className="text-gray-500" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="bg-transparent w-full ml-4 outline-none text-lg"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >

                {showPassword ? (
                  <EyeOff size={24} className="text-gray-500" />
                ) : (
                  <Eye size={24} className="text-gray-500" />
                )}

              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-5 rounded-2xl text-xl font-bold shadow-2xl transition"
            >

              Register Now

            </button>

          </form>

          {/* Login */}
          <p className="text-center text-gray-500 mt-8 text-lg">

            Already have an account?{" "}

            <span className="text-green-700 font-bold cursor-pointer hover:underline">
              Login
            </span>

          </p>
        </div>
      </div>
    </div>
  );
}