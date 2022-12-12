import Link from "next/link";
export const Header = () => {
  return (
    <header>
      <nav>
        <img />
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/services" passHref>
          Services
        </Link>
        <Link href="/about-us" passHref>
          About Us
        </Link>
        <Link href="/contact-us" passHref>
          Contact Us
        </Link>
      </nav>
    </header>
  );
};
