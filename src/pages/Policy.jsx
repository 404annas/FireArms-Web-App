import React from "react";
import { Link } from "react-router-dom";

const Policy = () => {
  return (
    <section>
      {/* Header */}
      <div className="bg-white px-6 sm:px-10 pt-20 pb-6">
        <h1 className="text-2xl sm:text-3xl text-center font-semibold text-lime-600">
          2nd To None Precision Firearms, LLC
        </h1>
      </div>

      {/* Banner */}
      <div className="relative h-64 sm:h-72 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/04/dark-texture-background-fresh-central-wallpaper-dark-patterns-hd-wallpapers-of-the-day-of-dark-texture-background.webp"
          alt="Dark texture background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-2 flex-wrap px-4 text-center">
          <Link
            to={"/"}
            className="text-white text-2xl sm:text-3xl font-bold cursor-pointer"
          >
            Home
          </Link>
          <span className="text-lime-500 text-2xl sm:text-3xl font-bold">
            /&nbsp; Privacy Policy
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 sm:px-10 md:px-16 py-12 space-y-12 max-w-6xl mx-auto">
        {/* Section 1 */}
        <div className="space-y-4">
          <h2 className="text-lime-500 font-bold text-2xl sm:text-4xl">
            WHO WE ARE?
          </h2>
          <p className="text-base sm:text-lg text-gray-800">
            Our website address is: https://2ndtononeprecisionfirearms.com.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <h2 className="text-lime-500 font-bold text-2xl sm:text-4xl">
            PRIVACY POLICY
          </h2>
          <p className="text-base sm:text-lg text-gray-800">
            We respect your privacy and are committed to protecting it.
          </p>
          <p className="text-base sm:text-lg text-gray-800">
            2nd To None Precision Firearms LLC (“us,” “we,” or “our”) operates
            the www.2ndtononeprecisionfirearms.com website (the “Service”). This
            page informs you of our policies about the collection, use and
            disclosure of personal data when you use our Service and the choices
            you have associated with that data. We use your data to provide and
            improve the Service. You agree to the collection and use of
            information, as explained by this policy, by using the Service.
          </p>
          <p className="text-base sm:text-lg text-gray-800">
            The Credit Card Billing Information, Shipping Information, and
            Contact Information in our checkout process are required in order to
            process your order and deliver the product to you. We store some
            information for accounting reasons. Your information will not be
            shown to third parties not involved in the transaction, nor used to
            send you any unrequested information. The entire Checkout process is
            handled through a secure SSL-encrypted connection.
          </p>
          <p className="text-base sm:text-lg text-gray-800">
            The Credit Card Billing Information is sent directly to our payment
            provider who processes your credit card transaction. The credit card
            information is neither recorded nor stored by us, and it can only be
            accessed by our payment provider. Each transaction has a very high
            level of security. Your credit card details are sent directly to the
            payment provider over a secure SSL-encrypted connection. They are
            not processed on our servers at any stage of the transaction, nor
            are they stored on our server.
          </p>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <h2 className="text-lime-500 font-bold text-2xl sm:text-4xl">
            SECURE TRANSMISSION
          </h2>
          <p className="text-base sm:text-lg text-gray-800">
            All information collected during the checkout process is transmitted
            via industry standard Secure Sockets Layer (SSL) featuring 128-bit
            encryption. A Secure Sockets Layer (SSL) Certificate creates an
            encrypted link between a website and a visitor’s Web browser. This
            link ensures that all data passed between the website and the
            browser remains private and secure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Policy;
