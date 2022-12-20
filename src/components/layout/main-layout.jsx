import React from "react";
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { Showcase } from "../showcase/showcase";
import { Newsletter } from "../newsletter/newsletter";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Showcase />
      <Newsletter />
      <main>{children}</main>
      <Footer />
    </>
    //Main Landing Page: (Complete)
    // navbar.jsx
    // home-page.jsx
    // footer.jsx

    //Services: (Complete)
    //services-page.jsx

    //About Us: (Complete)
    //about-us.js

    //Contact Us: (Missing All Styling)
    //contact-us.js

    //Login Page: (Missing All Styling)
    //login.js

    //Auto Generated Pages: (Missing All Styling)
  );
};

export default MainLayout;
