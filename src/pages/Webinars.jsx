import React from "react";

const Webinars = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto text-center pt-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-lime-600">
          2nd To None Precision Firearms, LLC
        </h1>
      </div>

      <div className="max-w-xl mx-auto mt-10 text-center px-4">
        <p className="text-gray-700 text-base sm:text-lg font-medium">
          This content is password protected. To view it please enter your
          password below:
        </p>
      </div>

      <div className="max-w-md mx-auto mt-8 px-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Password:</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border-b-2 border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-md text-gray-700"
          />
          <button className="w-full sm:w-auto bg-lime-500 text-white px-6 py-2 rounded-md hover:bg-lime-600 transition duration-200">
            Enter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Webinars;
