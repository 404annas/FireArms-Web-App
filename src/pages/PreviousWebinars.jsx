import React, { useState } from "react";
import { Link } from "react-router-dom";

const webinars = [
  {
    id: 1,
    title: "Weekly Freebie - 04/11",
    date: "04/11",
    price: "$0.00",
    imgSrc:
      "https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/05/freebie-completed--300x300.png",
    description:
      "This webinar covers the latest updates in precision firearms.",
    reviews: "Great session! Very informative.",
    additionalInfo: "Join us next week for more free webinars.",
  },
  {
    id: 2,
    title: "Weekly Freebie - 04/04",
    date: "04/04",
    price: "$0.00",
    imgSrc:
      "https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/05/freebie-completed--300x300.png",
    description: "In-depth discussion about firearm maintenance.",
    reviews: "Wonderful insights on gun maintenance.",
    additionalInfo: "Exclusive content for members only.",
  },
  {
    id: 3,
    title: "Weekly Freebie - 03/28",
    date: "03/28",
    price: "$0.00",
    imgSrc:
      "https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/05/freebie-completed--300x300.png",
    description: "A discussion about new trends in firearms technology.",
    reviews: "A fascinating session, highly recommended!",
    additionalInfo: "Get ready for next week's exclusive topics.",
  },
  {
    id: 4,
    title: "Weekly Freebie - 02/15",
    date: "03/21",
    price: "$0.00",
    imgSrc:
      "https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/05/freebie-completed--300x300.png",
    description: "Introduction to firearms safety and best practices.",
    reviews: "Excellent and very informative session.",
    additionalInfo:
      "This webinar will be followed by a hands-on demonstration.",
  },
  {
    id: 5,
    title: "Weekly Freebie - 02/28",
    date: "03/21",
    price: "$0.00",
    imgSrc:
      "https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/05/freebie-completed--300x300.png",
    description: "Introduction to firearms safety and best practices.",
    reviews: "Excellent and very informative session.",
    additionalInfo:
      "This webinar will be followed by a hands-on demonstration.",
  },
  {
    id: 6,
    title: "Weekly Freebie - 01/05",
    date: "03/21",
    price: "$0.00",
    imgSrc:
      "https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/05/freebie-completed--300x300.png",
    description: "Introduction to firearms safety and best practices.",
    reviews: "Excellent and very informative session.",
    additionalInfo:
      "This webinar will be followed by a hands-on demonstration.",
  },
  {
    id: 7,
    title: "Weekly Freebie - 01/03",
    date: "03/21",
    price: "$0.00",
    imgSrc:
      "https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/05/freebie-completed--300x300.png",
    description: "Introduction to firearms safety and best practices.",
    reviews: "Excellent and very informative session.",
    additionalInfo:
      "This webinar will be followed by a hands-on demonstration.",
  },
  {
    id: 8,
    title: "Weekly Freebie - 01/30",
    date: "03/21",
    price: "$0.00",
    imgSrc:
      "https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/05/freebie-completed--300x300.png",
    description: "Introduction to firearms safety and best practices.",
    reviews: "Excellent and very informative session.",
    additionalInfo:
      "This webinar will be followed by a hands-on demonstration.",
  },
];

const PreviousWebinars = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(webinars.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = webinars.slice(startIndex, endIndex);

  return (
    <section>
      <div className="bg-white px-4 sm:px-10 pt-20 pb-6">
        <h1 className="text-2xl sm:text-4xl text-center font-semibold text-lime-600">
          2nd To None Precision Firearms, LLC
        </h1>
      </div>

      <div className="relative h-72 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/04/dark-texture-background-fresh-central-wallpaper-dark-patterns-hd-wallpapers-of-the-day-of-dark-texture-background.webp"
          alt="Dark texture background"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <Link
            to={"/"}
            className="text-white text-2xl sm:text-3xl font-bold text-center px-4 cursor-pointer"
          >
            Home
          </Link>
          <span className="text-lime-500 text-2xl sm:text-3xl font-bold">
            /&nbsp; Previous Webinars
          </span>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 py-10">
        <div className="mb-8">
          <h2 className="text-lime-500 font-bold text-2xl sm:text-3xl mb-4">
            Previous Webinars
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((webinar) => (
            <Link
              key={webinar.id}
              to={`/webinar/${webinar.id}`}
              className="bg-gray-100 rounded-xl p-4 hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={webinar.imgSrc}
                alt={webinar.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-lime-600 mb-1">
                {webinar.title}
              </h3>
              <p className="text-gray-700">Date: {webinar.date}</p>
              <p className="text-gray-700">Price: {webinar.price}</p>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="bg-lime-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="bg-lime-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreviousWebinars;
