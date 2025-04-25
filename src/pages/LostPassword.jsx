import React from "react";

const LostPassword = () => {
  return (
    <section className="mb-10">
      <div className="bg-white px-4 sm:px-8 md:px-10 pt-20 pb-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-lime-600">
          2nd To None Precision Firearms, LLC
        </h1>
      </div>

      <div className="px-4 sm:px-8 md:px-20 mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Password Lost?
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-700 mb-10">
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>
      </div>

      <div className="px-4 sm:px-8 md:px-20">
        <label className="block text-base sm:text-lg font-semibold mb-2">
          Username or Email Address
        </label>
        <input
          className="border w-full sm:w-2/3 lg:w-1/2 px-4 py-2 mr-4 border-gray-400 rounded-lg outline-none text-md mb-6 focus:border-lime-500"
          type="text"
          required
        />

        <button className="bg-lime-500 hover:bg-lime-600 text-white text-base sm:text-lg font-semibold px-6 py-2 rounded-md transition duration-150">
          Reset Password
        </button>
      </div>
    </section>
  );
};

export default LostPassword;
