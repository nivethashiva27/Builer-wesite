// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // put your logo.png here

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#083b4e] text-white shadow-md">
      <div className="max-w-6xl mx-auto relative px-6">
        {/* top bar wrapper */}
        <div className="flex items-center h-20">
          {/* LEFT: logo (circle) */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full bg-white p-1 object-contain"
            />
          </div>

          {/* CENTER: nav links (absolutely centered) */}
          <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10 items-center text-sm font-semibold">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
            <li><Link to="/career" className="hover:text-yellow-400">Career</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact us</Link></li>
          </ul>

          {/* RIGHT: Login / Signup */}
          <div className="ml-auto hidden md:flex items-center gap-2">
            <Link to="/login" className="px-3 py-1 text-sm font-medium hover:text-yellow-400">Login</Link>
            <span className="mx-2 text-lg">/</span>
            <Link to="/signup" className="px-3 py-1 text-sm font-medium hover:text-yellow-400">Signup</Link>
          </div>

          {/* MOBILE: hamburger */}
          <div className="ml-auto md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-2 focus:outline-none"
            >
              {/* simple hamburger icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE MENU (collapsible) */}
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-3 px-2">
              <li><Link to="/" className="block py-2 px-3 rounded hover:bg-white/10">Home</Link></li>
              <li><Link to="/projects" className="block py-2 px-3 rounded hover:bg-white/10">Projects</Link></li>
              <li><Link to="/career" className="block py-2 px-3 rounded hover:bg-white/10">Career</Link></li>
              <li><Link to="/about" className="block py-2 px-3 rounded hover:bg-white/10">About us</Link></li>
              <li><Link to="/contact" className="block py-2 px-3 rounded hover:bg-white/10">Contact us</Link></li>

              <div className="flex items-center gap-2 pt-2">
                <Link to="/login" className="py-2 px-3 rounded hover:bg-white/10">Login</Link>
                <span className="text-lg">/</span>
                <Link to="/signup" className="py-2 px-3 rounded hover:bg-white/10">Signup</Link>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
