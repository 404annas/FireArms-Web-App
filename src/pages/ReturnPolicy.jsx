import React from "react";
import { Link } from "react-router-dom";

const ReturnPolicy = () => {
  return (
    <section>
      <div className="bg-white px-4 sm:px-6 md:px-10 pt-16 pb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold text-lime-600">
          2nd To None Precision Firearms, LLC
        </h1>
      </div>

      <div className="relative h-60 sm:h-72 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/04/dark-texture-background-fresh-central-wallpaper-dark-patterns-hd-wallpapers-of-the-day-of-dark-texture-background.webp"
          alt="Dark texture background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-2 text-center px-4">
          <Link
            to="/"
            className="text-white text-xl sm:text-2xl md:text-3xl font-bold hover:underline"
          >
            Home
          </Link>
          <span className="text-lime-500 text-xl sm:text-2xl md:text-3xl font-bold">
            / Returns Policy
          </span>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-10">
        <div className="flex flex-col gap-5 text-gray-800 text-base sm:text-lg leading-relaxed">
          <h2 className="text-lime-600 font-bold text-2xl sm:text-3xl">
            Returns / Cancellations Policy
          </h2>

          <p>
            If you are not satisfied with your purchase, please <b>contact</b>{" "}
            us for a Return Merchandise Authorization (RMA) request within 10
            business days of the receipt of the product. If the item is returned
            unopened in the original box, we will exchange it, offer you store
            credit, or offer you a refund, less 20% restocking fee, based on
            your original method of payment. The product must be returned within
            10 business days of the issuance of the RMA. All products must be
            packed in the original packaging, including any accessories,
            manuals, documentation and registration that shipped with the
            product. A 15% open box fee in addition to the 20% restocking fee
            (totaling 35%) will be assessed on any sealed product that is opened
            or removed from its original packaging.
          </p>

          <div>
            <p className="font-semibold">
              Please note that we do not permit the return of the following
              products:
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>
                Special orders and products that are custom configured to your
                specifications.
              </li>
              <li>
                Products sold “as is” or “used” or that have been installed or
                used after receipt.
              </li>
              <li>Firearms, once transferred to buyer.</li>
              <li>
                Illumination devices, electronic sights, optics and night vision
                equipment.
              </li>
              <li>NO RETURNS ON FIREARMS.</li>
            </ul>
          </div>

          <p>
            <b>NOTE:</b> We recommend that you use a carrier that offers
            shipment tracking for all returns, and either insure your package
            for safe return or declare the full value of the shipment so that
            you are protected if the shipment is lost or damaged in transit.
          </p>

          <p>
            If you choose not to use a carrier that offers tracking and do not
            insure or declare the full value of the product, you will be
            responsible for any loss or damage to the product during shipping.
          </p>

          <p>
            Content on this site may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website.
          </p>

          <p>
            These websites may collect data about you, use cookies, embed
            additional third-party tracking, and monitor your interaction with
            that embedded content, including tracking your interaction if you
            have an account and are logged in to that website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReturnPolicy;
