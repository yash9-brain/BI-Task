import React from "react";
// import { FiArrowLeft } from "react-icons/fi";
import logo from "../assets/logo.png";
import backlogo from "../assets/backlogo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-10 text-[#7179BD]">
      <div className="flex flex-col gap-5 items-start">
        <img src={logo} alt="Logo" className="h-10" />
        <div className="flex items-center justify-center gap-4">
          <img src={backlogo} alt="" height={30} width={30} />
          Back
        </div>
      </div>
    </header>
  );
};

export default Header;
