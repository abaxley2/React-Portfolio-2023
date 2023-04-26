import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#050A30] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "200px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#050A30] flex flex-col justify-center items-center"
        }
      >
        <li className="py-7 text-4xl">Home</li>
        <li className="py-7 text-4xl">About</li>
        <li className="py-7 text-4xl">Work</li>
        <li className="py-7 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072B1]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#D44638]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000C66]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
