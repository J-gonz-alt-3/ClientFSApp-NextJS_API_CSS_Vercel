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
    //Main Landing Page: (Complete)
    // navbar.jsx
    // home-page.jsx
    // footer.jsx

    //Services: (Missing All)
    //services-page.jsx

    //About Us: (Missing All)
    //about-us.js

    //Contact Us: (Missing All)
    //contact-us.js

    //Auto Generated Pages: (Missing All)
  );
};

export default MainLayout;
