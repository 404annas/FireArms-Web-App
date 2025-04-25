import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Laptop",
      price: "$999",
    },
    {
      id: 2,
      name: "Headphones",
      price: "$199",
    },
    {
      id: 3,
      name: "Smartphone",
      price: "$499",
    },
  ];

  const cartCount = cartItems.length;

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
          style={{ cursor: "pointer" }}
        ></div>
      )}

      <div
        onClick={toggleSidebar}
        className="fixed bottom-6 right-6 bg-lime-600 text-white p-4 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-110 focus:outline-none z-50"
      >
        <span className="relative">
          <FaShoppingCart className="text-2xl" />
          {cartCount > 0 && (
            <span
              className="absolute -top-6 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center"
              style={{ fontSize: "10px" }}
            >
              {cartCount}
            </span>
          )}
        </span>
      </div>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-xl transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          width: "280px",
          zIndex: "999",
        }}
      >
        <div className="p-6 flex flex-col h-full">
          <h2 className="text-2xl font-semibold text-lime-600 mb-6">
            Your Cart
          </h2>

          <div className="flex-1 overflow-y-auto">
            {cartCount === 0 ? (
              <p className="text-center text-gray-600 mt-12">
                Your cart is empty
              </p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center mb-4 border-b pb-4"
                  >
                    <div className="flex sm:flex-row flex-col gap-4 sm:items-center items-start">
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-auto">
            <Link
              to="/previous-webinars"
              className="block w-full py-3 bg-lime-600 text-white text-center rounded-md hover:bg-lime-700 transition duration-300"
            >
              Go to Shop
            </Link>
          </div>

          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-xl text-lime-600 hover:text-lime-800"
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
