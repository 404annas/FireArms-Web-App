import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Previous Webinars", path: "/previous-webinars" },
  { label: "Webinars", path: "/webinars" },
  { label: "Rules", path: "/rules" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact", path: "/contact" },
  { label: "My Account", path: "/account" },
  { label: "Login", path: "https://precision-firearm-game.netlify.app" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 bg-gray-700 w-full text-white">
      <div className="flex items-center justify-between py-4 px-6 lg:px-8">
        <Link to={"/"}>
          <h1 className="font-semibold text-lg">2nd To None Firearms</h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-lime-400 border-b border-lime-500 pb-1"
                  : "hover:text-lime-300"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu icon */}
        {!menuOpen && (
          <button
            className="lg:hidden text-white z-50"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars size={20} />
          </button>
        )}

        {/* Sidebar menu */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-40 transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close icon */}
          <div className="flex justify-end p-5">
            <button className="text-white" onClick={() => setMenuOpen(false)}>
              <FaTimes size={20} />
            </button>
          </div>

          {/* Sidebar nav items */}
          <nav className="flex flex-col gap-4 px-6 font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `py-2 border-b border-gray-600 ${
                    isActive ? "text-lime-400" : "hover:text-lime-300"
                  }`
                }
                onClick={() => setMenuOpen(false)} // Close sidebar on click
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Background overlay when menu is open */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
