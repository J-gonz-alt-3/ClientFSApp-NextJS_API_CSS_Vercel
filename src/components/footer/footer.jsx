import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="p-5 bg-dark text-white text-center position-relative">
      <div className="container">
        <p className="lead">Copyright &copy; 2022 IT Global Professionals</p>

        <a href="" class="position-absolute bottom-0 end-0 p-5">
          <i class="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
  );
};
