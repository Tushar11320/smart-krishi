import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Tractor,
  ShieldCheck,
} from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1600&auto=format&fit=crop"
        alt="Farm"
        className="absolute w-full h-full object-cover opacity-40"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-black/60 to-green-700/50"></div>

      {/* LOGIN BOX */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] p-10 shadow-2xl">

        {/* LOGO */}
        <div className="flex flex-col items-center mb-10">

          <div className="bg-yellow-400 p-5 rounded-full shadow-2xl mb-5">
            <Tractor className="text-black" size={40} />
          </div>

          <h1 className="text-5xl font-black text-white">
            Jay Kishan
          </h1>

          <p className="text-green-100 mt-4 text-center">
            Smart Agriculture Platform for Farmers
          </p>

        </div>

        {/* FORM */}
        <form className="space-y-6">

          {/* EMAIL */}
          <div>
            <label className="text-white font-medium">
              Email Address
            </label>

            <div className="mt-2 flex items-center bg-white/10 border border-white/20 rounded-2xl px-4 py-4">

              <Mail className="text-green-300" size={22} />

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-white placeholder-gray-300 w-full ml-3"
              />

            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-white font-medium">
              Password
            </label>

            <div className="mt-2 flex items-center bg-white/10 border border-white/20 rounded-2xl px-4 py-4">

              <Lock className="text-green-300" size={22} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="bg-transparent outline-none text-white placeholder-gray-300 w-full ml-3"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="text-white" size={22} />
                ) : (
                  <Eye className="text-white" size={22} />
                )}
              </button>

            </div>
          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-200">
              <input type="checkbox" />
              Remember Me
            </label>

            <button className="text-yellow-300 hover:text-yellow-400">
              Forgot Password?
            </button>

          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 transition duration-300 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl"
          >
            Login Now
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 py-2">

            <div className="flex-1 h-[1px] bg-white/20"></div>

            <span className="text-gray-300 text-sm">
              OR
            </span>

            <div className="flex-1 h-[1px] bg-white/20"></div>

          </div>

          {/* GOOGLE LOGIN */}
          <button
            type="button"
            className="w-full bg-white hover:bg-gray-100 transition duration-300 text-black py-4 rounded-2xl font-semibold shadow-xl"
          >
            Continue with Google
          </button>

        </form>

        {/* FOOTER */}
        <div className="mt-8 text-center">

          <p className="text-gray-300">
            Donot have an account?
          </p>

          <button className="mt-3 text-yellow-300 font-bold hover:text-yellow-400">
            Create New Account
          </button>

        </div>

        {/* SECURITY BADGE */}
        <div className="mt-8 flex justify-center">

          <div className="flex items-center gap-2 bg-green-500/20 border border-green-400/20 px-4 py-2 rounded-full text-green-200 text-sm">

            <ShieldCheck size={18} />

            Secure Farmer Login

          </div>

        </div>

      </div>

    </div>
  );
}