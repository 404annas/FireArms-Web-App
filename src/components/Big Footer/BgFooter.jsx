import React from "react";
import { Link } from "react-router-dom";

const BgFooter = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between gap-12 px-6 md:px-20 py-10 md:py-20 bg-gray-100 text-gray-800">
      {/* Left Section */}
      <div className="flex flex-col gap-4 max-w-sm">
        <img
          className="w-14 h-14"
          src="https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/04/2ndtononeprecisionfirearms.webp"
          alt="Logo"
        />
        <p className="font-medium">
          Get in touch with us for the best quality custom firearms.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-lg font-medium text-lime-600">
          <a href="">FB Live Group</a>
          <a href="">FB Group</a>
        </div>
      </div>

      {/* Quick Links Section 1 */}
      <div className="flex flex-col gap-2">
        <h1 className="text-lime-600 font-semibold text-xl md:text-2xl mb-2">
          Quick Links
        </h1>
        {[
          { label: "About Us", to: "/about" },
          { label: "Privacy Policy", to: "/policy" },
          { label: "Shipping Policy", to: "/ship-policy" },
          { label: "View Gallery", to: "/gallery" },
          { label: "Return Policy", to: "/return-policy" },
        ].map((item) => (
          <Link key={item.to} to={item.to}>
            <span className="cursor-pointer hover:text-lime-500 hover:-translate-y-1 transition-all duration-300 inline-block">
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Quick Links Section 2 */}
      <div className="flex flex-col gap-2">
        <h1 className="text-lime-600 font-semibold text-xl md:text-2xl mb-2">
          Quick Links
        </h1>
        {[
          { label: "About Us", to: "/about" },
          { label: "Privacy Policy", to: "/policy" },
          { label: "Shipping Policy", to: "/ship-policy" },
          { label: "View Gallery", to: "/gallery" },
          { label: "Return Policy", to: "/return-policy" },
        ].map((item) => (
          <Link key={item.to + "-2"} to={item.to}>
            <span className="cursor-pointer hover:text-lime-500 hover:-translate-y-1 transition-all duration-300 inline-block">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default BgFooter;
