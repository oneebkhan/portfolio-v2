import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="flex w-full p-12 mt-4 sm:mt-28 justify-center items-center">
      Made with ❤️ by <img src={logo} alt="Logo" className="ml-2 w-8 h-8" />
    </div>
  );
};

export default Footer;
