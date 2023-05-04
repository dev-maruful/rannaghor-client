import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <img className="w-28" src="/logo_2.png" alt="" />
        <p className="text-base">
          Copyright &copy; RannaGhor Foods Ltd.
          <br />
          Providing reliable recipes since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a className="cursor-pointer">
            <FaTwitter></FaTwitter>
          </a>
          <a className="cursor-pointer">
            <FaYoutube></FaYoutube>
          </a>
          <a className="cursor-pointer">
            <FaFacebookF></FaFacebookF>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
