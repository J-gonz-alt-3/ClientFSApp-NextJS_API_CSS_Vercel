import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            alt="logo"
            src={"/../public/logo.jpg"}
            width={75}
            height={75}
          />
          <nav>
            <ul>
              <li>
                {" "}
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" passHref>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1>IT Global Professionals</h1>
      </div>
    </header>
  );
};
