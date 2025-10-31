import React from "react";
import { FaUserCircle } from "react-icons/fa";
import success from "../assets/success.jpg";
import hideandseek from "../assets/hideandseek.jpg";
import team3 from "../assets/team3.jpg";
import frame from "../assets/frame.jpg";
import functions from "../assets/function.jpg";
import logo from "../assets/logo.jpg"; // ✅ your logo image here

export default function Career() {
  return (
    <main className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-[500px] flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${success})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-500 bg-opacity-50"></div>

        {/* <div className="relative z-10 text-white">
          <p className="text-yellow-300 text-lg font-semibold mb-3">
            Success Path
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
            Build Your Career
          </h1>
          <p className="text-2xl mt-4">Your Future Begins Here!</p>
        </div> */}
      </section>

      {/* ===== CAREER SECTION ===== */}
      <section className="max-w-6xl mx-auto text-center py-16 px-6">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Create Your Destiny with{" "}
          <span className="font-bold text-[#0b4d73]">Magizh Builders</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Join us to craft exceptional homes and create lasting impressions.
          <br />
          Explore current openings and grow with us today.
        </p>

        <div className="mt-10">
          <h3 className="text-2xl font-medium">HR</h3>
          <p className="text-3xl font-semibold mt-2 text-gray-800">
            Vasanth Kumar
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-16 justify-center">
          {[
            "Admin",
            "Digital & Marketing",
            "Civil Engineer",
            "Quality Surveyor",
            "Human Resources",
            "Other",
          ].map((title, index) => (
            <div
              key={index}
              className="border rounded-2xl shadow-md p-8 flex flex-col items-center transition-transform hover:-translate-y-2 duration-300"
            >
              <FaUserCircle className="text-7xl text-black mb-4" />
              <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
              <p className="text-gray-600 mt-1">Chennai</p>
              <button className="mt-6 bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section className="max-w-6xl mx-auto mt-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={hideandseek}
            alt="Celebration"
            className="rounded-xl shadow-md object-cover w-full h-52 md:h-60"
          />
          <img
            src={frame}
            alt="Team Event"
            className="rounded-xl shadow-md object-cover w-full h-52 md:h-60"
          />
          <img
            src={functions}
            alt="Function Event"
            className="rounded-xl shadow-md object-cover w-full h-52 md:h-60"
          />
          <img
            src={team3}
            alt="Team Group"
            className="rounded-xl shadow-md object-cover w-full h-52 md:h-60"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Make your Dreams <br /> Fulfill
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Celebrating milestones, sharing moments. <br />
            Explore the media stories that highlight <br />
            our journey of excellence.
          </p>
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
