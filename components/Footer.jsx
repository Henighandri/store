import Link from "next/link";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Test@gmail.com</p>
      <p>50102752</p>

      <p className="icons">
        <AiFillFacebook />
        {/* <Link href={facebook}>
          <a target="_blank">
            <AiFillFacebook />
          </a>
        </Link> */}
      </p>
    </div>
  );
};

export default Footer;
