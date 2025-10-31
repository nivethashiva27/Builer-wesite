// // import React from "react";
// // import blackglass from "../assets/blackglass.jpg"; // your background image

// // export default function Projects() {
// //   return (
// //     <main className="bg-white">
// //       {/* ===== HERO SECTION ===== */}
// //       <section
// //         className="relative h-[500px] flex items-center justify-center text-center"
// //         style={{
// //           backgroundImage: `url(${blackglass})`,
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //         }}
// //       >
// //         {/* Blue transparent overlay */}
// //         <div className="absolute inset-0 bg-[#0b4d73] bg-opacity-70"></div>

// //         {/* Centered Text */}
// //         <h1 className="relative text-white text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
// //           Our Projects
// //         </h1>
        
// //       </section>
// //     </main>
// //   );
// // }



// import React from "react";
// import blackglass from "../assets/blackglass.jpg"; // your background image

// export default function Projects() {
//   return (
//     <main className="bg-white">
//       {/* ===== HERO SECTION ===== */}
//       <section
//         className="relative h-[500px] flex flex-col items-center justify-center text-center"
//         style={{
//           backgroundImage: `url(${blackglass})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Blue transparent overlay */}
//         <div className="absolute inset-0 bg-[#0b4d73] bg-opacity-70"></div>

//         {/* Centered Text */}
//         <div className="relative z-10 text-white">
//           <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
//             Our Projects
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-extrabold mt-4 drop-shadow-lg">
//             Commercial Properties
//           </h2>
//         </div>
//       </section>
//     </main>
//   );
// }
// import React from "react";
// import blackglass from "../assets/blackglass.jpg"; // hero section background
// import Projectglass from "../assets/Projectglass.jpg"; // your project image

// export default function Projects() {
//   return (
//     <main className="bg-white">
//       {/* ===== HERO SECTION ===== */}
//       <section
//         className="relative h-[500px] flex flex-col items-center justify-center text-center"
//         style={{
//           backgroundImage: `url(${blackglass})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Blue transparent overlay */}
//         <div className="absolute inset-0 bg-[#0b4d73] bg-opacity-70"></div>

//         {/* Centered Text */}
//         <div className="relative z-10 text-white">
//           <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
//             Our Projects
//           </h1>
//           <h2 className="text-4xl md:text-5xl font-extrabold mt-4 drop-shadow-lg">
//             Commercial Properties
//           </h2>
//         </div>
//       </section>

//       {/* ===== PROJECT SECTION ===== */}
//       <section className="max-w-6xl mx-auto p-8 mt-10 bg-white shadow-md rounded-lg">
//         <div className="grid md:grid-cols-3 gap-4">
//           {/* Left big image */}
//           <div className="md:col-span-2">
//             <img
//               src={Projectglass}
//               alt="Perungudi Project"
//               className="w-full h-[400px] object-cover rounded-lg"
//             />
//           </div>

//           {/* Right two small images */}
//           <div className="flex flex-col gap-4">
//             <img
//               src={Projectglass}
//               alt="Perungudi Project"
//               className="w-full h-[190px] object-cover rounded-lg"
//             />
//             <img
//               src={Projectglass}
//               alt="Perungudi Project"
//               className="w-full h-[190px] object-cover rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Project Info */}
//         <div className="mt-6 flex flex-wrap justify-between items-center">
//           <div>
//             <h3 className="text-xl font-semibold">Perungudi</h3>
//             <p className="text-gray-600 flex items-center gap-4 mt-1">
//               🏢 Stilt + 6 Floors
//               <span>2,00,000 Sq.ft</span>
//             </p>
//           </div>
//           <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
//             <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
//             <span className="font-medium text-gray-800">Ongoing</span>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
import React from "react";
import blackglass from "../assets/blackglass.jpg"; // hero section background
import Projectglass from "../assets/Projectglass.jpg"; // Perungudi project image
import projectaadam from "../assets/projectaadam.jpg"; // Aadambakkam project image
import project1 from "../assets/project1.jpg"; 
import kitchen from "../assets/kitchen.png";
import bluestr from "../assets/bluestr.jpg"; // Blue Star main image
import bluestar1 from "../assets/bluestar1.jpg"; // Blue Star sub image 1
import bluestar2 from "../assets/bluestar2.jpg"; // Blue Star sub image 2 
import logo from "../assets/logo.jpg";

export default function Projects() {
  return (
    <main className="bg-white">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-[500px] flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${blackglass})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0b4d73] bg-opacity-70"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
            Our Projects
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 drop-shadow-lg">
            Commercial Properties
          </h2>
        </div>
      </section>

      {/* ===== PERUNGUDI PROJECT ===== */}
      <section className="max-w-6xl mx-auto p-8 mt-10 bg-white shadow-md rounded-lg">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Left big image */}
          <div className="md:col-span-2">
            <img
              src={Projectglass}
              alt="Perungudi Project"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Right two small images */}
          <div className="flex flex-col gap-4">
            <img
              src={Projectglass}
              alt="Perungudi Project Interior 1"
              className="w-full h-[190px] object-cover rounded-lg"
            />
            <img
              src={Projectglass}
              alt="Perungudi Project Interior 2"
              className="w-full h-[190px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-6 flex flex-wrap justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Perungudi</h3>
            <p className="text-gray-600 flex items-center gap-4 mt-1">
              🏢 Stilt + 6 Floors
              <span>2,00,000 Sq.ft</span>
            </p>
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
            <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
            <span className="font-medium text-gray-800">Ongoing</span>
          </div>
        </div>
      </section>

      {/* ===== AADAMBAKKAM PROJECT ===== */}
      <section className="max-w-6xl mx-auto p-8 mt-10 bg-white shadow-md rounded-lg">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Left big image */}
          <div className="md:col-span-2">
            <img
              src={projectaadam}
              alt="Aadambakkam Project"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Right two small images */}
          <div className="flex flex-col gap-4">
            <img
              src={project1}
              alt="Aadambakkam Project Exterior"
              className="w-full h-[190px] object-cover rounded-lg"
            />
            <img
              src={kitchen}
              alt="Aadambakkam Project Interior"
              className="w-full h-[190px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-6 flex flex-wrap justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Aadambakkam</h3>
            <p className="text-gray-600 flex items-center gap-4 mt-1">
              🏢 Stilt + 10 Floors
              <span>1,40,000 Sq.ft</span>
            </p>
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
            <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
            <span className="font-medium text-gray-800">New Launch</span>
          </div>
        </div>
      </section>
       {/* ===== BLUE STAR PROJECT ===== */}
      <section className="max-w-6xl mx-auto p-8 mt-10 mb-10 bg-white shadow-md rounded-lg">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <img
              src={bluestr}
              alt="Blue Star Project"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-4">
            <img
              src={bluestar1}
              alt="Blue Star Exterior"
              className="w-full h-[190px] object-cover rounded-lg"
            />
            <img
              src={bluestar2}
              alt="Blue Star Interior"
              className="w-full h-[190px] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">Aadambakkam</h3>
            <p className="text-gray-600 flex items-center gap-4 mt-1">
              🏢 Stilt + 16 Floors
              <span>1,40,000 Sq.ft</span>
            </p>
          </div>
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
            <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
            <span className="font-medium text-gray-800">Ongoing</span>
          </div>
        </div>
      </section>
      
      {/* ===== FOOTER SECTION ===== */}
      <footer className="bg-[#074a67] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {/* Logo & Name */}
          <div>
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Magizh Builders Logo"
                className="w-12 h-12 rounded-full bg-white p-1"
              />
              <h2 className="text-2xl font-bold">Magizh Builders</h2>
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Pricing</h3>
            <ul className="space-y-2 text-gray-200">
              <li>About</li>
              <li>Add Properties</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Legal</h3>
            <ul className="space-y-2 text-gray-200">
              <li>Privacy Policy</li>
              <li>Licence agreement</li>
              <li>Terms of use</li>
              <li>Cookie Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Get In Touch</h3>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-2">
                <span>📍</span>
                39, Kodambakkam Road, Ethiraj Nagar, West Mambalam,
                Chennai-600033, Tamil Nadu, India.
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                +91 123 456 789
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                Info@magizhbuilders.com
              </li>
            </ul>
          </div>
        </div>
      </footer>

</main>
  );
}
