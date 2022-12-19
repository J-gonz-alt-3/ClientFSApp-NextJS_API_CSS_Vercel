import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdPowerSettingsNew } from "react-icons/md";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
      <div className="container">
        <Link href="/" passHref className="navbar-brand">
          {" "}
          IT Global Pro
          {/* <Image
            alt="logo"
            src={"/logo4.png"}
            width={80}
            height={80}
            style={{ borderRadius: "15%", border: "1px solid black" }}
          /> */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
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
            <li className="nav-item">
              <Link href="/contact-us" className="nav-link" passHref>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    /* <div app__navbar-login>
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
    </nav> */
  );
};
