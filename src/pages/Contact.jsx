import React from "react";
import dream from "../assets/dream.jpg"; // ✅ Background image
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.jpg";

export default function Contact() {
  return (
    <main className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-[500px] flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${dream})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blue overlay for clarity */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>

        {/* Text content */}
        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Connecting Dreams
          </h1>
          <p className="text-2xl md:text-3xl font-semibold">
            Contact us Today!
          </p>
        </div>
      </section>

      
      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        {/* ===== Left Side: Form ===== */}
        <div className="bg-white shadow-lg rounded-lg p-8 border">
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
            Your Perfect Dreams Start with a Conversation!
          </h2>

          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name*
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number*
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address*
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Enter Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-900 text-white font-semibold px-8 py-2 rounded-md hover:bg-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* ===== Right Side: Contact Info ===== */}
        <div className="space-y-8">
          {/* Contact Info Box */}
          <div className="bg-white shadow-lg rounded-lg p-8 border">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-6 text-gray-700">
              {/* Address */}
              <div>
                <h3 className="font-semibold text-black">📍 Address</h3>
                <p>
                  Magizh Builders, Ground Floor No.5 Bishop Wallers Avenue,
                  Mylapore, Chennai - 600004, Tamil Nadu
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="font-semibold text-black">📞 Phone</h3>
                <p>+91 123 456 789</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-semibold text-black">✉️ Email</h3>
                <p>magizhbuilders@gmail.com</p>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="font-semibold text-black">🕒 Business Hours</h3>
                <p>
                  Mon - Sat <br /> 10:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Box */}
          <div className="bg-white shadow-lg rounded-lg p-8 border">
            <h2 className="text-xl font-semibold mb-4">👥 Connect with us</h2>
            <div className="flex space-x-6 text-2xl text-blue-900 justify-start">
              <a
                href="#"
                className="hover:text-blue-600 transition duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="hover:text-pink-500 transition duration-200"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-blue-700 transition duration-200"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="hover:text-red-600 transition duration-200"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </section>
       {/* ===== FOOTER SECTION ===== */}
                      <footer className="bg-[#0b4d73] text-white py-12 mt-20">
                        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
                          {/* Logo & Company */}
                          <div>
                            <div className="flex items-center space-x-3">
                              <img
                                src={logo}
                                alt="Magizh Builders Logo"
                                className="w-10 h-10 rounded-full bg-white p-1"
                              />
                              <h2 className="text-xl font-semibold">Magizh Builders</h2>
                            </div>
                          </div>
                
                          {/* Pricing / Navigation */}
                          <div>
                            <h3 className="font-semibold mb-3">Pricing</h3>
                            <ul className="space-y-2 text-gray-200">
                              <li>
                                <a href="#" className="hover:text-white">
                                  About
                                </a>
                              </li>
                              <li>
                                <a href="#" className="hover:text-white">
                                  Add Properties
                                </a>
                              </li>
                            </ul>
                          </div>
                
                          {/* Legal Section */}
                          <div>
                            <h3 className="font-semibold mb-3">Legal</h3>
                            <ul className="space-y-2 text-gray-200">
                              <li>
                                <a href="#" className="hover:text-white">
                                  Privacy Policy
                                </a>
                              </li>
                              <li>
                                <a href="#" className="hover:text-white">
                                  Licence Agreement
                                </a>
                              </li>
                              <li>
                                <a href="#" className="hover:text-white">
                                  Terms of Use
                                </a>
                              </li>
                              <li>
                                <a href="#" className="hover:text-white">
                                  Cookie Policy
                                </a>
                              </li>
                            </ul>
                          </div>
                
                          {/* Contact Section */}
                          <div>
                            <h3 className="font-semibold mb-3">Get In Touch</h3>
                            <ul className="space-y-3 text-gray-200">
                              <li className="flex items-start space-x-2">
                                <span className="text-lg">📍</span>
                                <p>
                                  39, Kodambakkam Road, <br />
                                  Ethiraj Nagar, West Mambalam, <br />
                                  Chennai - 600033, Tamil Nadu, India.
                                </p>
                              </li>
                              <li className="flex items-center space-x-2">
                                <span className="text-lg">📞</span>
                                <p>+91 123 456 789</p>
                              </li>
                              <li className="flex items-center space-x-2">
                                <span className="text-lg">✉️</span>
                                <p>info@magizhbuilders.com</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </footer>
    </main>
  );
}
