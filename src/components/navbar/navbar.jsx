import React from "react";
import Link from "next/link";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <Link href="/" passHref className="navbar-brand">
          {" "}
          IT Global Professionals
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#kicMyAss"
          aria-expanded="false"
          aria-controls="navbarNavDropdown"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="kickMyAss">
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
      </div>
    </nav>
  );
};
