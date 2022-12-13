import React from "react";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
    //Main Landing Page:
    // navbar.jsx
    // home-page.jsx
    // footer.jsx

    //Services:
    //navbar.jsx
    //services-page.jsx
    //footer.jsx

    //About Us:
    //about-us.js

    //Contact Us:
    //contact-us.js
  );
};

export default MainLayout;
