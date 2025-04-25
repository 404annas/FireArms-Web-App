import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      {/* Title Section */}
      <div className="bg-white px-4 md:px-10 pt-20 pb-6">
        <h1 className="text-2xl md:text-3xl text-center font-semibold text-lime-600">
          2nd To None Precision Firearms, LLC
        </h1>
      </div>

      {/* Hero Banner */}
      <div className="relative h-60 md:h-72 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/04/dark-texture-background-fresh-central-wallpaper-dark-patterns-hd-wallpapers-of-the-day-of-dark-texture-background.webp"
          alt="Dark texture background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
        <div className="absolute inset-0 z-20 flex md:flex-row items-center justify-center">
          <Link
            to="/"
            className="text-white text-2xl md:text-3xl font-bold px-4"
          >
            Home
          </Link>
          <span className="text-lime-500 text-2xl md:text-3xl font-bold">
            / About Us
          </span>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-4 md:px-10 lg:px-24 py-20">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl text-lime-500 font-bold">
            About Us
          </h1>
          <p className="text-base md:text-lg max-w-xl">
            2nd To None Precision Firearms is a community built around a shared
            passion for firearms, safety, and responsible gun ownership. We
            offer exceptional service, top-quality firearms, and hunting gear,
            catering to hunters, target shooters, and law enforcement/military
            personnel.
          </p>
        </div>
        <div className="w-full sm:w-[50%] lg:w-[50%]">
          <img
            className="w-full rounded-md"
            src="https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/04/2ndtononeprecisionfirearms-1.webp"
            alt="Image"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="px-4 md:px-10 lg:px-24 mb-20">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl md:text-5xl text-lime-500 font-bold">
            Our Mission
          </h1>
          <p className="max-w-2xl text-base md:text-lg">
            Our mission is to empower our customers with the tools and knowledge
            they need while proudly supporting our military and first responders
            through custom gun charity auctions and donations.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center gap-6 bg-gray-800 px-6 md:px-20 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-lime-500">
          Interested? Shop all categories!
        </h1>
        <p className="text-white max-w-xl">
          Unleash your inner marksman! Explore our complete selection of
          firearms, hunting gear, and more.
        </p>
        <button className="text-white bg-lime-600 hover:bg-lime-700 transition-all duration-150 px-6 py-3 rounded-full w-52 md:w-60 text-base md:text-lg font-semibold">
          Go To Shop
        </button>
      </div>
    </section>
  );
};

export default About;
