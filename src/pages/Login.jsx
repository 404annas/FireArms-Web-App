import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md sm:max-w-lg md:max-w-md p-6 sm:p-8 rounded-2xl shadow-lg">
        <div className="flex justify-around mb-6 border-b pb-2">
          <button
            className={`text-base sm:text-lg font-semibold py-2 px-4 transition-colors duration-200 ${
              isLogin
                ? "text-lime-600 border-b-2 border-lime-600"
                : "text-gray-500 hover:text-lime-600"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`text-base sm:text-lg font-semibold py-2 px-4 transition-colors duration-200 ${
              !isLogin
                ? "text-lime-600 border-b-2 border-lime-600"
                : "text-gray-500 hover:text-lime-600"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          <form className="space-y-5">
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
                  required
                />
                <span
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="h-5 w-5" />
              <label className="text-sm text-gray-600">Remember Me</label>
            </div>

            <button
              type="submit"
              className="w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 focus:outline-none transition"
            >
              Login
            </button>

            <Link to={"/account/lost-password"}>
              <p className="text-sm text-lime-600 mt-2 text-center hover:underline">
                Forgot Password?
              </p>
            </Link>
          </form>
        ) : (
          <form className="space-y-5">
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="h-5 w-5" />
              <label className="text-sm text-gray-600">
                I accept the{" "}
                <span className="text-lime-600 hover:underline cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 focus:outline-none transition"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
