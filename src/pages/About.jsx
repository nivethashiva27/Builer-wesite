import React from "react";
import Aboutimage from "../assets/Aboutimage.jpg"; // ✅ your background image
import mvv from "../assets/mvv.jpg";
import moreapart from "../assets/moreapart.jpg";
import twoglass from "../assets/twoglass.jpg";
import greenpark from "../assets/greenpark.jpg";
import bluewhiteapart from "../assets/bluewhiteapart.jpg";
import logo from "../assets/logo.jpg";

export default function About() {
  return (
    <main className="bg-white">
      {/* ===== HERO IMAGE SECTION ===== */}
      <section
        className="relative h-[600px] flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${Aboutimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
             <br className="hidden md:block" /> 
            </h1>
        </div>
      </section>


      {/* ===== MISSION – VISION – VALUES SECTION ===== */}
      <section className="max-w-4xl mx-auto text-center py-16 px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Raising Standard with Every Projects
        </h2>
        <p className="text-gray-600 mb-8">
          We build every project on decades of trust, raising the bar high not
          only in quality but also in how people experience home.
        </p>

        {/* Image */}
        <div className="flex justify-center mb-10">
          <img
            src={mvv}
            alt="Mission Vision Values"
            className="rounded-xl shadow-md object-cover w-[400px] md:w-[500px]"
          />
        </div>

        {/* Mission */}
        <div className="text-left mt-8">
          <h3 className="text-xl font-bold mb-2">Mission</h3>
          <p className="text-gray-700 border-b pb-4">
            To consistently exceed the expectations of our investors, corporate
            clients, and consumers by delivering longer-lasting, higher-quality
            construction with a focus on transparency, improved specifications,
            timely delivery, and unwavering professionalism.
          </p>
        </div>

        {/* Vision */}
        <div className="text-left mt-8">
          <h3 className="text-xl font-bold mb-2">Vision</h3>
          <p className="text-gray-700 border-b pb-4">
            To be a leading real estate developer, setting new benchmarks for
            top-notch projects and concepts across all markets, propelling the
            development of contemporary India, while creating outstanding value
            to our investors and clients.
          </p>
        </div>

        {/* Values */}
        <div className="text-left mt-8">
          <h3 className="text-xl font-bold mb-2">Values</h3>
          <p className="text-gray-700 border-t pt-4">
            We build residential masterpieces with the same love and detail we
            would devote to our own homes, emphasizing quality, standardization,
            and attention to detail. Grounded in sound cultural values from the
            very beginning, we make sure each project is a reflection of the
            integrity that defines us.
          </p>
        </div>
        {/* Passion */}
        <div className="text-left mt-8">
          <h3 className="text-xl font-bold mb-2">Passion</h3>
          <p className="text-gray-700 border-t pt-4">
            We build residential masterpieces with the same love and detail we
            would devote to our own homes, emphasizing quality, standardization,
            and attention to detail. Grounded in sound cultural values from the
            very beginning, we make sure each project is a reflection of the
            integrity that defines us.
          </p>
        </div>
      </section>
     {/* ===== WHAT WE BRING TO LIFE SECTION ===== */}
      <section className="max-w-7xl mx-auto text-center py-16 px-6">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-2">What We Bring To Life</h2>
        <p className="text-lg text-gray-700 font-semibold mb-10">
          Magizh Builders is committed to providing its clients with a
          comprehensive portfolio for all their real-estate need.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={moreapart}
              alt="Residential"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center p-4">
              <h3 className="text-white text-xl font-bold">Residential</h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={greenpark}
              alt="Plotted Land"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center p-4">
              <h3 className="text-white text-xl font-bold">Plotted Land</h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={twoglass}
              alt="IT Company"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center p-4">
              <h3 className="text-white text-xl font-bold">IT Company</h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={bluewhiteapart}
              alt="Hospitality"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center p-4">
              <h3 className="text-white text-xl font-bold">Hospitality</h3>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="bg-[#0b165e] text-white py-6 rounded-lg flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 font-semibold text-lg">
          <p>
            <span className="text-2xl font-bold">22+</span> Years of Experience
          </p>
          <p>
            <span className="text-2xl font-bold">1000+</span> Happy Families
          </p>
          <p>
            <span className="text-2xl font-bold">1 Million+</span> area developed
          </p>
          <p>
            <span className="text-2xl font-bold">300+</span> Projects Built
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
