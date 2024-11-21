import React from "react";
import './Footer.css'; // Optional: Add specific styles for Footer if needed
import './App.css';
function Footer() {
  return (
    <footer className="font-[Poiret_One]">
      {/* Title Section */}
      <div className="bg-black py-8 text-center">
        <h1 className="text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] xl:text-[10rem] font-extrabold tracking-widest text-customdarkyellow inline-block opacity-70">
          {["A", "r", "h", "a", "m"].map((letter, index) => (
            <span
              key={index}
              className="hover:text-customyellow transition-colors duration-300"
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      {/* Central Section */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-6 text-center">
        <div className="flex justify-center mt-4 space-x-6 sm:space-x-4 md:space-x-6">
          <a
            href="https://www.instagram.com/arham_ggsipu/profilecard/?igsh=aTI4Y3N6OW55aTls"
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 w-12 h-12 flex items-center justify-center rounded-full"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-white text-lg"></i>
          </a>
          <a
            href="https://chat.whatsapp.com/DHGSS0mg7DaJBGKixluaBr"
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 w-12 h-12 flex items-center justify-center rounded-full"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp text-white text-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/arham-ggsipuedc/"
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 w-12 h-12 flex items-center justify-center rounded-full"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-white text-lg"></i>
          </a>
        </div>

        <nav className="flex justify-center mt-6 space-x-6 text-sm text-gray-300 sm:text-xs">
          <a href="#" className="hover:underline hover:text-yellow-300">
            Home
          </a>
          <a href="#" className="hover:underline hover:text-yellow-300">
            About
          </a>
          <a href="#" className="hover:underline hover:text-yellow-300">
            Events
          </a>
          <a href="#" className="hover:underline hover:text-yellow-300">
            Team
          </a>
          <a href="#" className="hover:underline hover:text-yellow-300">
            Contact
          </a>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-4 text-center text-sm text-white sm:text-xs">
        <p className="mt-2">
          Website Developed and Maintained by Web Team{" "}
          <span className="font-medium">Arham</span>
        </p>
        <p className="mt-2 text-gray-200">
          © Arham GGSIPU EDC All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
