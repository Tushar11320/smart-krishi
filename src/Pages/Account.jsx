import React, { useState } from "react";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container mx-auto p-5 max-w-md">
      <div className="border rounded-lg shadow-lg p-5">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Register"}
        </h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 mb-3 rounded"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded"
        />

        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-2 mb-3 rounded"
          />
        )}

        <button className="w-full bg-green-600 text-white p-2 rounded">
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="text-center mt-4">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}
          <button
            className="text-blue-600 ml-2"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Account;