import React from "react";
import homp from "../assets/homp.jpg"; // Hero image
import logo from "../assets/logo.jpg"; // Logo
import hom1 from "../assets/hom1.jpg"; // ongoing project image
import youtube1 from "../assets/youtube1.png"; // Testimonial image

export default function Home() {
  return (
    <main className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-md overflow-hidden shadow-lg">
          {/* LEFT: House Image */}
          <div className="md:w-1/2 flex justify-center bg-[#0269a4]">
            <img
              src={homp}
              alt="Modern House"
              className="object-cover w-full h-full md:max-w-[650px]"
            />
          </div>

          {/* RIGHT: Builder Info */}
          <div
            className="md:w-1/2 flex items-center justify-center p-10 md:p-16"
            style={{
              background: "linear-gradient(90deg, #7ec3e8 0%, #d4ebfa 100%)",
            }}
          >
            <div className="text-left">
              {/* Logo + Company Name */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-12 h-12 rounded-full bg-white p-1 object-contain"
                />
                <h1 className="text-3xl md:text-4xl font-extrabold text-[#07101a]">
                  MAGIZH BUILDERS
                </h1>
              </div>

              {/* CHENNAI text */}
              <p className="tracking-[0.7em] text-sm text-red-600 font-semibold mb-6">
                CHENNAI
              </p>

              {/* Headline */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#07101a] mb-3">
                <span className="text-black">2BHK</span> Lifestyle House
              </h2>

              {/* Location */}
              <p className="text-lg text-[#07101a] mb-8">
                @Kodambakkam, Chennai
              </p>

              {/* Read More Button */}
              <a
                href="#"
                className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md shadow hover:bg-gray-800 transition-all"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUILDERS PROMOTERS SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute w-full h-full border-[12px] border-red-600 rounded-full border-b-transparent"></div>
            <div className="relative bg-white rounded-full shadow-lg w-36 h-36 flex flex-col items-center justify-center">
              <p className="text-xl font-bold">300</p>
              <p className="font-semibold text-center leading-tight">
                Completed<br />Projects
              </p>
            </div>
          </div>

          
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute w-full h-full border-[12px] border-red-600 rounded-full border-b-transparent"></div>
            <div className="relative bg-white rounded-full shadow-lg w-36 h-36 flex flex-col items-center justify-center">
              <p className="text-xl font-bold">10+</p>
              <p className="font-semibold text-center leading-tight">
                Upcoming<br />Projects
              </p>
            </div>
          </div>

          
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute w-full h-full border-[12px] border-red-600 rounded-full border-b-transparent"></div>
            <div className="relative bg-white rounded-full shadow-lg w-36 h-36 flex flex-col items-center justify-center">
              <p className="text-xl font-bold">03+</p>
              <p className="font-semibold text-center leading-tight">
                Cities in<br />Tamilnadu
              </p>
            </div>
          </div>
        </div>
    {/* Title */}
        <h2 className="text-2xl font-extrabold text-[#07101a] mt-10 mb-8">
          BUILDERS PROMOTERS
        </h2>

        {/* About Text Section */}
        <div className="max-w-4xl mx-auto text-center text-gray-800 leading-relaxed">
          <p className="mb-3">
            Welcome to <span className="font-bold">MAGIZH Builders</span>, a premium builder in Chennai for luxury
            apartments, homes, and other buildings. We are also known for our
            professional approach to construction and services.
          </p>
          <p className="mb-3">
            As one of the most reputed builders in Chennai, we pride ourselves
            on delivering quality homes to our customers at a great value. We
            have developed a name in the market as quality builders, which we
            aim to uphold further with each home we build. We are also Chennai’s
            leading flat promoters.
          </p>
          <p className="mb-8">
            Browse our completed projects to understand our superior service and
            quality. Then pick a beautiful home from our current and upcoming
            projects section.
          </p>

          <a
            href="#"
            className="inline-block mt-4 px-8 py-3 bg-[#0f5166] text-white font-semibold rounded-md shadow hover:bg-[#083b4e] transition-all"
          >
            Read More
          </a>
        </div>
      </section>

      {/* ===== ONGOING PROJECTS SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-extrabold text-center text-[#07101a] mb-10 uppercase">
          ONGOING PROJECTS
        </h2>

        <div className="flex flex-col md:flex-row overflow-hidden shadow-lg rounded-md">
          {/* LEFT: Project Image */}
          <div className="md:w-1/2">
            <img
              src={hom1}
              alt="SAI Hardik"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: Project Details */}
          <div className="md:w-1/2 bg-[#004d3b] text-white p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-extrabold mb-2">SAI Hardik</h3>
            <h4 className="text-xl font-semibold text-yellow-400 mb-6">
              East Tambaram
            </h4>
            <ul className="space-y-3 text-lg font-medium">
              <li>• 19 Apartments</li>
              <li>• 99 L* Onwards</li>
              <li>• 1195–1467 SQ.FT</li>
              <li>• S+5 Floors</li>
              <li>• 2 & 3 BHK</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-extrabold text-center text-[#07101a] mb-10">
          Testimonials
        </h2>

        <div className="flex flex-col md:flex-row overflow-hidden shadow-lg rounded-md">
          {/* LEFT: YouTube thumbnail */}
          <div className="md:w-2/3 bg-black flex justify-center items-center">
            <img
              src={youtube1}
              alt="Happy customers"
              className="w-full object-cover"
            />
          </div>

          {/* RIGHT: Testimonial details */}
          <div className="md:w-1/3 bg-black text-white flex flex-col justify-center p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-extrabold mb-2">
              Mr.K.Balakrishnan
            </h3>
            <p className="text-base md:text-lg font-medium leading-relaxed">
              Magizh Builders of Champions<br />
              Sholinganallur, Chennai
            </p>
          </div>
        </div>
      </section>




            {/* ===== FOOTER SECTION ===== */}
      <footer className="bg-[#084b6f] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo + Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Magizh Builders Logo"
                className="w-10 h-10 rounded-full bg-white p-1 object-contain"
              />
              <h2 className="text-xl font-bold">Magizh Builders</h2>
            </div>
          </div>

          {/* Pricing Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pricing</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Add Properties</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Licence Agreement</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <p>
                  39, Kodambakkam Road, Ethiraj Nagar,<br />
                  West Mambalam, Chennai - 600033,<br />
                  Tamilnadu, India.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <p>+91 123 456 789</p>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <p>info@magizhbuilders.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom border + copy */}
        <div className="text-center text-gray-300 text-sm mt-10 border-t border-gray-600 pt-6">
          © {new Date().getFullYear()} Magizh Builders. All Rights Reserved.
        </div>
      </footer>

    </main>
  );
}

