import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <div className="app__footer-links">
        <div className="app__footer-links_logo">
          <Image
            src={"/../public/logo4.png"}
            width={80}
            height={80}
            style={{
              borderRadius: "15%",
              display: "flex",
              justifyContent: "center",
            }}
            alt={""}
          />
        </div>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">
          © 2022 IT Global Professionals. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
