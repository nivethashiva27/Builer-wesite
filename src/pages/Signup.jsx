import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ to navigate to Home after Register
import contractionsite from "../assets/contractionsite.png"; // ✅ your image path

export default function Signup() {
  const navigate = useNavigate(); // navigation hook

  // handle register button click
  const handleRegister = (e) => {
    e.preventDefault();
    // after registration, navigate to home
    navigate("/");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto p-6">
        {/* ===== LEFT SIDE IMAGE ===== */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={contractionsite}
            alt="Construction Site"
            className="w-[90%] md:w-[85%] object-contain"
          />
        </div>

        {/* ===== RIGHT SIDE FORM ===== */}
        <div className="md:w-1/2 w-full bg-white rounded-lg p-8 shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-8">Sign up</h2>

          <form onSubmit={handleRegister} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Email
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
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                I have read the Terms of Service
              </label>
            </div>

            {/* Register Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-10 py-3 rounded-full transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
