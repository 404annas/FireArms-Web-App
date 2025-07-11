import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full h-screen pt-20 overflow-hidden">
      {/* YouTube video background */}
      <iframe
        className="absolute top-0 left-0 object-cover inset-0 w-full sm:h-full h-screen sm:scale-125 z-0 pointer-events-none"
        src="https://www.youtube.com/embed/_eQLFVpOYm4?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=_eQLFVpOYm4"
        title="How AK47 Works"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

      {/* Centered content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <img
          src="https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/04/2ndtononeprecisionfirearms-1.webp"
          alt="Logo"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-6"
        />

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Firearms, Accessories, Knives, and Hunting Gear
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-lg sm:max-w-xl">
          Quality Custom Firearms upon Request
        </p>

        <div className="flex gap-3 flex-wrap justify-center">
          <Link to={"/rules"}>
            <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition">
              Enter Rules
            </button>
          </Link>
          <a href="mailto:admin@2ndtononeprecisionfirearms.com">
            <button className="bg-white hover:bg-gray-100 text-black font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition">
              Request Custom Work
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
