import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdExitToApp } from "react-icons/md";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <Link href="/" passHref className="navbar-brand">
          {" "}
          IT Global Professionals
        </Link>
        <div class="app__navbar-links">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              {" "}
              <Link href="/" className="nav-link" passHref>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/services" className="nav-link" passHref>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about-us" className="nav-link" passHref>
                About Us
              </Link>
            </li>
            <li className="nav-item disabled">
              <Link href="/contact-us" className="nav-link" passHref>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="lightblue"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdExitToApp
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <Link
                    href="/"
                    style={{ color: "lightblue", textDecoration: "none" }}
                    onClick={() => setToggleMenu(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    style={{ color: "lightblue", textDecoration: "none" }}
                    onClick={() => setToggleMenu(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    style={{ color: "lightblue", textDecoration: "none" }}
                    onClick={() => setToggleMenu(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    style={{ color: "lightblue", textDecoration: "none" }}
                    onClick={() => setToggleMenu(false)}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
