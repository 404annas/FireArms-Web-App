import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Webinars from "./pages/Webinars";
import Rules from "./pages/Rules";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import LostPassword from "./pages/LostPassword";
import Login from "./pages/Login";
import PreviousWebinars from "./pages/PreviousWebinars";
import About from "./pages/About";
import Policy from "./pages/Policy";
import ShippingPolicy from "./pages/ShippingPolicy";
import Gallery from "./pages/Gallery";
import ReturnPolicy from "./pages/ReturnPolicy";
import ScrollMemory from "./components/Scroll Memory/ScrollMemory";

const App = () => {
  return (
    <>
      <ScrollMemory />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/lost-password" element={<LostPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/previous-webinars" element={<PreviousWebinars />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/ship-policy" element={<ShippingPolicy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
