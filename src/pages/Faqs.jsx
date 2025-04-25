import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "When are Webinars?",
      content:
        "This is the same as what we run on FB, but just self servicing here now. You can find the status of the Webinars for which you’ve registered in your Account Dashboard under My Orders! After logging in, click on your name up in the corner. Here, you can see if a Webinar is sold out and waiting to be broadcasted. If a Webinars has begun broadcast, you can even find the link to the video! Webinars run after every Spot is filled, in the order in which they were sold out. If a Webinar that you registered for has not yet run, there may be another Webinar scheduled in front of it!",
    },
    {
      title: "How do I pick a Spot on a Webinars?",
      content:
        "The process of choosing spots is similar to using a site like ticketmaster. When you click on an Webinars you see spot numbers that you can choose from.  Available seats are white, unavailable seats are pink. Click the seat that you want, and it will turn green. Do this for as many seats as you want. Once you have selected all of the seats that you want, click the PARTICIPATE button. When you are finished choosing seats, you can proceed to checkout.  Note: If you click on a seat, you have 5 minutes to pay for the spot or it will become available to other members. On the checkout screen, you will fill in your billing info, and credit card. You may also use Funds if you have any in your wallet. This will appear directly above the credit card window. (If you received a coupon code from an Admin, type that code in and click APPLY COUPON.)",
    },
    {
      title: "What is the Wallet and Funds?",
      content:
        "You can add funds to your wallet by visiting the My Account page and making a deposit.  Also, you are able to securely save a debit/credit card here so you can play quicker and with less time spent picking spots.",
    },
    {
      title: "Do I need to have an account to participate in a Webinars?",
      content:
        "Participation in any Webinars requires you to have an account on the site. If you have an account, Click Login to Participate, or the login button in the top menu. On the popup screen, fill in your login details. If you do not have an account, click on the new account tab. Fill in your information and click on Create Account.  If you want to create an account now, you may do so by click this link https://2ndtononeprecisionfirearms.com/my-account",
    },
    {
      title: "I was picked as the Winner, what’s next?",
      content:
        "You will receive a phone call or message from us. If this is the first firearm you’ve received from us, you will need to find an FFL local to whom you want us to transfer the firearm. Once your FFL e-mails their license to us at:  admin@2ndtononeprecisionfirearms.com With YOUR NAME in the subject of the e-mail, we will ship the gun out to their FFL, and you can pick it up from them! We do not charge any fees, shipping or otherwise, however the FFL you choose to have the firearm transferred to may charge you a transfer fee.",
    },
    {
      title: "Do you send guns in the mail/UPS/FEDEX Etc.?",
      content:
        "When we sell a firearm to someone over the internet, we DO NOT ship to the individual.  We send the firearm to an authorized FFL (Federal Firearms Licensee) in their area, that FFL then follows all local and federal restrictions for turning over the firearm to the purchaser. IF YOU HAVE NOT HAD A FIREARM SHIPPED via ONLINE SALE BEFORE – Don’t sweat it! We have shipped tens of thousands of firearms across the United States! We can walk you through the steps, as well as help you locate an FFL to have your firearm shipped to! Although we tend to lean towards FEDEX, we do often ship UPS per request. USPS, we will only ship knives and accessories through. CONUS (Lower 48 states) shipping is always included for free. If you live outside of the Continental US, you will be responsible for shipping. Once the item is packaged, we will send you the tracking information. All packages are insured and tracking numbers provided to recipients, once the package is packed and awaiting pickup!",
    },
    {
      title: "Do I need to watch the live Webinars to be picked?",
      content:
        "It is not necessary to watch the Webinars live in order to have a chance at being picked as the Winner.",
    },
    {
      title: "My question isn’t answered here",
      content:
        "You can message us on our Facebook page, or email us at  admin@2ndtononeprecisionfirearms.com or send Brian Strickland a message on FB.",
    },
  ];

  return (
    <section>
      <div className="bg-white px-5 sm:px-10 pt-20 pb-6">
        <h1 className="text-2xl sm:text-4xl flex items-center justify-center text-center font-semibold text-lime-600">
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
            /&nbsp; FAQs
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center mx-6 sm:mx-0 mt-8">
        <h1 className="text-2xl sm:text-4xl font-semibold text-lime-600">
          FREQUENTLY ASKED QUESTIONS (FAQS)
        </h1>
      </div>

      <div className="w-full px-5 sm:px-10 my-10 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border rounded-xl overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-6 sm:py-8 text-left font-semibold bg-lime-500 hover:bg-lime-600 flex justify-between items-center"
            >
              <span className="sm:text-xl text-md">{item.title}</span>
              <span className="text-xl">
                {openIndex === index ? <ImCross /> : <FaPlus />}
              </span>
            </button>
            <div
              className={`transition-all duration-300 px-6 sm:px-8 overflow-hidden ${
                openIndex === index ? "sm:max-h-48 max-h-fit py-8" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-md sm:text-lg mb-4">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
