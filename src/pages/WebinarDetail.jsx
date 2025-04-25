import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
    title: "Weekly Freebie - 03/21",
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

const WebinarDetail = () => {
  const { id } = useParams(); // Get the webinar ID from the URL
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const webinar = webinars.find((webinar) => webinar.id === parseInt(id));
    setSelectedWebinar(webinar);
  }, [id]);

  if (!selectedWebinar) {
    return <p className="text-center">Webinar not found.</p>;
  }

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 pt-20 pb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-lime-600">
          Webinar Details
        </h1>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-16 py-10">
        <div className="mb-8">
          <h2 className="text-lime-500 font-bold text-2xl sm:text-3xl mb-4">
            {selectedWebinar.title}
          </h2>
        </div>

        {/* Tabs */}
        <div className="tabs mb-6 flex gap-4 flex-wrap">
          <button
            onClick={() => setActiveTab("description")}
            className={`tab-button px-4 py-2 border-2 border-gray-300 rounded-lg transition-colors ${
              activeTab === "description"
                ? "bg-lime-500 text-white"
                : "bg-transparent"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`tab-button px-4 py-2 border-2 border-gray-300 rounded-lg transition-colors ${
              activeTab === "reviews"
                ? "bg-lime-500 text-white"
                : "bg-transparent"
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => setActiveTab("additionalInfo")}
            className={`tab-button px-4 py-2 border-2 border-gray-300 rounded-lg transition-colors ${
              activeTab === "additionalInfo"
                ? "bg-lime-500 text-white"
                : "bg-transparent"
            }`}
          >
            Additional Info
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content mt-6">
          {activeTab === "description" && <p>{selectedWebinar.description}</p>}
          {activeTab === "reviews" && <p>{selectedWebinar.reviews}</p>}
          {activeTab === "additionalInfo" && (
            <p>{selectedWebinar.additionalInfo}</p>
          )}
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <Link
            to="/previous-webinars"
            className="text-lime-600 hover:underline"
          >
            Back to Previous Webinars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebinarDetail;
