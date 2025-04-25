import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section>
      <div className="bg-white px-4 sm:px-6 lg:px-10 pt-16 pb-6">
        <h1 className="text-2xl sm:text-3xl text-center font-semibold text-lime-600">
          2nd To None Precision Firearms, LLC
        </h1>
      </div>

      <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/04/dark-texture-background-fresh-central-wallpaper-dark-patterns-hd-wallpapers-of-the-day-of-dark-texture-background.webp"
          alt="Dark texture background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        <div className="absolute inset-0 z-20 flex sm:flex-row items-center justify-center gap-2">
          <Link
            to="/"
            className="text-white text-2xl sm:text-3xl font-bold text-center px-2 sm:px-4"
          >
            Home
          </Link>
          <span className="text-lime-500 text-2xl sm:text-3xl font-bold">
            /&nbsp; Custom Work
          </span>
        </div>
      </div>

      <div className="text-center mt-10 px-4">
        <h2 className="text-lg sm:text-2xl md:text-3xl text-lime-600 font-semibold">
          Send Your Request For Custom Work — We Will Contact You ASAP.
        </h2>
      </div>

      <form className="flex flex-col gap-6 mx-4 sm:mx-10 md:mx-20 my-10">
        <input
          className="bg-gray-100 outline-none rounded-md px-4 py-2 text-lime-600 text-base sm:text-lg border border-lime-500"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="bg-gray-100 outline-none rounded-md px-4 py-2 text-lime-600 text-base sm:text-lg border border-lime-500"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="bg-gray-100 outline-none rounded-md px-4 py-2 text-lime-600 text-base sm:text-lg border border-lime-500"
          type="text"
          placeholder="Subject"
          required
        />
        <textarea
          className="bg-gray-100 outline-none rounded-md px-4 py-2 text-lime-600 text-base sm:text-lg border border-lime-500 resize-none"
          placeholder="Message"
          rows="6"
          required
        ></textarea>
      </form>

      <div className="mx-4 sm:mx-10 md:mx-20 mb-16">
        <button className="w-full sm:w-40 bg-lime-500 hover:bg-lime-600 transition-colors duration-200 rounded-md px-4 py-2 text-white text-lg font-semibold">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Gallery;
