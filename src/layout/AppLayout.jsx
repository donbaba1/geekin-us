import React from "react";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import ScrollToTop from "../utils/ScrollToTop";

const AppLayout = () => {
  return (
    <>
    <ScrollToTop/>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
