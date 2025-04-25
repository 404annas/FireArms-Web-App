import React, { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleViewPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="mb-10">
      {/* Header */}
      <div className="bg-white px-4 sm:px-8 md:px-10 pt-20 pb-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-lime-600">
          2nd To None Precision Firearms, LLC
        </h1>
      </div>

      {/* Account Section */}
      <div className="px-4 sm:px-8 md:px-20 mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          My Account
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 mb-6">
          Login
        </h2>

        <div className="border border-gray-300 px-6 py-8 rounded-xl shadow-md bg-white">
          {/* Username */}
          <label className="block text-base sm:text-lg font-semibold mb-2">
            Username or Email Address
          </label>
          <input
            className="border w-full px-4 py-2 border-gray-400 rounded-lg outline-none text-md mb-6 focus:border-lime-500"
            type="text"
            required
          />

          {/* Password */}
          <label className="block text-base sm:text-lg font-semibold mb-2">
            Password
          </label>
          <div className="relative mb-6">
            <input
              className="border w-full px-4 py-2 border-gray-400 rounded-lg outline-none text-md pr-12 focus:border-lime-500"
              type={showPassword ? "text" : "password"}
              required
            />
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-xl text-gray-600"
              onClick={toggleViewPassword}
            >
              {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
            </div>
          </div>

          {/* Login Options */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <button className="w-full sm:w-fit bg-lime-500 hover:bg-lime-600 text-white text-lg font-semibold px-6 py-2 rounded-md transition duration-150">
              Log In
            </button>
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" />
              <span>Remember Me?</span>
            </label>
          </div>

          {/* Lost Password */}
          <div>
            <a
              className="text-sm text-pink-600 hover:underline"
              href="/account/lost-password"
            >
              Lost Your Password?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
