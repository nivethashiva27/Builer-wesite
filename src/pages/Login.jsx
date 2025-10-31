import React from "react";
import { useNavigate } from "react-router-dom";
import safety from "../assets/safety.png"; // ✅ Make sure the image path is correct

export default function Login() {
  const navigate = useNavigate(); // for navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // You can add authentication here later if needed
    // For now, just navigate to Home
    navigate("/");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto p-6">
        {/* ===== LEFT SIDE IMAGE ===== */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={safety}
            alt="Construction Site Safety"
            className="w-[90%] md:w-[85%] object-contain"
          />
        </div>

        {/* ===== RIGHT SIDE LOGIN FORM ===== */}
        <div className="md:w-1/2 w-full bg-white rounded-lg p-8 shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-8">Login</h2>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Address */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <p className="text-gray-500 text-sm mt-2 cursor-pointer hover:text-blue-700">
                Forgot password?
              </p>
            </div>

            {/* Login Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-10 py-3 rounded-full transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
