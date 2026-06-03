import React, { useState } from "react";

export default function Account() {
let [isLogin, setIsLogin] = useState(true);

let handleSubmit = (e) => {
e.preventDefault();
if (isLogin) {
  alert("Login Successful");
} else {
  alert("Registration Successful");
}


};

return ( <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex items-center justify-center px-4"> <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"> <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
{isLogin ? "Welcome Back" : "Create Account"} </h2>

    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      )}

      <input
        type="email"
        placeholder="Email Address"
        className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {!isLogin && (
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      )}

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
      >
        {isLogin ? "Login" : "Register"}
      </button>
    </form>

    <div className="text-center mt-5">
      <span className="text-gray-600">
        {isLogin
          ? "Don't have an account?"
          : "Already have an account?"}
      </span>

      <button
        type="button"
        onClick={() => setIsLogin(!isLogin)}
        className="ml-2 text-green-700 font-bold hover:underline"
      >
        {isLogin ? "Register" : "Login"}
      </button>
    </div>
  </div>
</div>

);
}
