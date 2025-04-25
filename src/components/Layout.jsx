import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import BgFooter from "./Big Footer/BgFooter";
import Cart from "./Cart/Cart"

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <BgFooter />
      <Footer />

      <Cart />
    </div>
  );
};

export default Layout;
