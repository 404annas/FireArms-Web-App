import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <section className="mb-10">
      {/* Header */}
      <div className="bg-white px-4 sm:px-10 pt-20 pb-6">
        <h1 className="text-2xl text-center font-semibold text-lime-600">
          2nd To None Precision Firearms, LLC
        </h1>
      </div>

      {/* Hero Section */}
      <div className="relative h-72 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/04/dark-texture-background-fresh-central-wallpaper-dark-patterns-hd-wallpapers-of-the-day-of-dark-texture-background.webp"
          alt="Dark texture background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 px-4 text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 text-white text-2xl font-bold">
            <Link to="/" className="px-2">
              Home
            </Link>
            <span className="text-lime-500">/ Contact</span>
          </div>
          <p className="text-white text-sm sm:text-lg max-w-lg">
            For fastest service, contact us by email: <br />
            <span className="text-lime-500">
              marty@2ndtononeprecisionfirearms.com
            </span>{" "}
            <br />
            You can also use the Quick Request form below…
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-10 my-12">
        <div className="text-center">
          <h1 className="text-lime-600 text-3xl sm:text-4xl font-semibold">
            Contact Us
          </h1>
          <p className="mt-2 text-base">
            Get in touch: Let us know how we can help!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 mt-10">
          {/* Location */}
          <div className="flex flex-col items-center text-lime-700 hover:text-lime-600 text-sm sm:w-60 text-center transition-all duration-200">
            <FaLocationArrow className="text-3xl" />
            <a
              href="https://www.google.com/maps/place/2932+Mistys+Run,+Fort+Worth,+TX+76244,+USA/@32.941533,-97.2955355,17z/data=!3m1!4b1!4m6!3m5!1s0x864dd990fa473df1:0x9613d8d598aec276!8m2!3d32.941533!4d-97.2955355!16s%2Fg%2F11cpq6gt88?sa=X&ved=1t:242&ictx=111&entry=tts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-semibold text-lg">2932 Mistys Run Keller, TX 76244</p>
            </a>{" "}
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-lime-700 hover:text-lime-600 text-sm sm:w-60 text-center transition-all duration-200">
            <IoCall className="text-3xl" />
            <a href="tel:+19727407953">
              <p className="font-semibold text-lg">972-740-7953</p>
            </a>{" "}
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-lime-700 hover:text-lime-600 text-sm sm:w-60 text-center transition-all duration-200">
            <IoMail className="text-3xl" />
            <p className="font-semibold text-lg">
              <a href="mailto:admin@2ndtononeprecisionfirearms.com">
                admin@2ndtononeprecisionfirearms.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-screen-md mx-auto px-4 sm:px-10">
        <form className="flex flex-col gap-6">
          <input
            className="bg-gray-200 outline-none rounded-md px-4 py-2 text-lime-600 text-md sm:text-lg border border-lime-500"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="bg-gray-200 outline-none rounded-md px-4 py-2 text-lime-600 text-md sm:text-lg border border-lime-500"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="bg-gray-200 outline-none rounded-md px-4 py-2 text-lime-600 text-md sm:text-lg border border-lime-500"
            type="text"
            placeholder="Subject"
            required
          />
          <textarea
            className="bg-gray-200 outline-none rounded-md px-4 py-2 text-lime-600 text-md sm:text-lg border border-lime-500"
            placeholder="Message"
            rows="6"
          />
          <button className="w-full bg-lime-500 hover:bg-lime-600 transition-all duration-200 rounded-md px-4 py-2 text-white text-sm sm:text-lg font-semibold">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
