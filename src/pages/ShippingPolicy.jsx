import React from "react";
import { Link } from "react-router-dom";

const ShippingPolicy = () => {
  return (
    <section>
      {/* Header */}
      <div className="bg-white px-6 sm:px-10 pt-20 pb-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-lime-600">
          2nd To None Precision Firearms, LLC
        </h1>
      </div>

      {/* Banner */}
      <div className="relative h-56 sm:h-72 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/04/dark-texture-background-fresh-central-wallpaper-dark-patterns-hd-wallpapers-of-the-day-of-dark-texture-background.webp"
          alt="Dark texture background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="text-lime-500"> / Shipping Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 sm:px-10 md:px-16 py-10 max-w-5xl mx-auto text-gray-800">
        <div className="flex flex-col gap-6">
          <h2 className="text-lime-500 text-2xl sm:text-3xl font-bold mb-4">
            Shipping Policy
          </h2>
          <p>
            Although we tend to lean towards FED EX, we do often ship UPS per
            request. USPS, we will only ship knives and accessories through. All
            packages are insured and tracking numbers provided to recipients,
            once the package is packed and awaiting pickup!
          </p>
          <p>
            When we sell a firearm to someone over the internet, we DO NOT ship
            to the individual.
          </p>
          <p>
            We send the firearm to an authorized FFL (Federal Firearms Licensee)
            in their area, that FFL then follows all local and federal
            restrictions for turning over the firearm to the purchaser.
          </p>
          <p>
            IF YOU HAVE NOT HAD A FIREARM SHIPPED via ONLINE SALE BEFORE – Don’t
            sweat it! We have shipped tens of thousands of firearms across the
            United States! We can walk you through the steps, as well as help
            you locate an FFL to have your firearm shipped to!
          </p>
          <p>
            All orders are shipped promptly from our warehouse or in-store
            inventory within 3 – 10 business days using UPS, FedEx, or USPS.
            Tracking numbers are available for items shipped via UPS and FedEx.
          </p>
          <p>
            Our online inventory changes every day. Occasionally an item may
            appear on the site by mistake or the item’s description may contain
            a typographical error. We do not guarantee that titles,
            descriptions, pictures or prices on our site are error-free. We
            reserve the right to refuse any order including but not limited to
            orders for items with errors in the description or price. In the
            event that we cancel an order we will not charge the customer’s
            credit card or we will refund the money.
          </p>
          <p>
            If an item’s description contains an error such as incorrect photo,
            price, accessory or description and a customer makes the order, we
            will not process the order without first contacting the customer. If
            the order is mistakenly shipped, we may advise the customer to
            return the item in an unopened condition and we will refund the
            customer. By placing an order, the customer agrees that 2nd To None
            Precision Firearms LLC will be the final arbiter of discrepancies in
            the online catalog.
          </p>
          <p>
            You must be 18 or older to purchase rifle or shotgun ammunition and
            21 or older to purchase handgun ammunition. All ammunition will be
            shipped ground with adult signature required. Always make sure to
            use the correct ammunition for your specific firearms. Check your
            local laws for any other regulations. *All ammunition sales will
            comply with local and state laws and will not be shipped to any
            restricted areas.*
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShippingPolicy;
