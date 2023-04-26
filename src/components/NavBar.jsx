import React from "react";
import Logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#050A30] text-gray-300">
      <div>
        <img src="{Logo}" alt="logo image" style={{ width: "80px" }} />
      </div>
    </div>
  );
};

export default NavBar;
