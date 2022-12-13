import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdPowerSettingsNew } from "react-icons/md";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link href="/" passHref>
          <Image
            alt="logo"
            src={"/../public/logo4.png"}
            width={80}
            height={80}
            style={{ borderRadius: "15%", border: "1px solid black" }}
          />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          {" "}
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        <li className="p__opensans">
          <Link href="/services" passHref>
            Services
          </Link>
        </li>
        <li className="p__opensans">
          <Link href="/about-us" passHref>
            About Us
          </Link>
        </li>
        <li className="p__opensans">
          <Link href="/contact-us" passHref>
            Contact Us
          </Link>
        </li>
      </ul>
      <div app__navbar-login>
        <Link href="/login" className="p__opensans">
          Log In/Registration
        </Link>
      </div>
      <div>
        <GiHamburgerMenu
          color="white"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdPowerSettingsNew
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <Link href="/" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => setToggleMenu(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about-us" onClick={() => setToggleMenu(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" onClick={() => setToggleMenu(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
