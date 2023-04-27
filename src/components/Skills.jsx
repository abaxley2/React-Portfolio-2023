import React from "react";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JavaScript from "../assets/JavaScript.png";
import jQuery from "../assets/JQueary.png";
import MongoDB from "../assets/MongoDB.png";
import MySQL from "../assets/MySQL.png";
import Nodejs from "../assets/Node.png";
import Reactjs from "../assets/Reactjs.png";
import TailwindCSS from "../assets/TailwindCSS.png";
import BootstrapCSS from "../assets/BootstrapCSS.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#050A30] text-[#ccd6f6] ">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#7EC8E3]">
            Experience
          </p>
          <p className="py-6 text-2xl">
            These are some of the technologies I have used
          </p>
        </div>
        {/* boxes */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={jQuery} alt="HTML icon" />
            <p className="my-4">JQuery</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MongoDB} alt="HTML icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySQL} alt="HTML icon" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Nodejs} alt="HTML icon" />
            <p className="my-4">Nodejs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Reactjs} alt="HTML icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TailwindCSS} alt="HTML icon" />
            <p className="my-4">TailwindCSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={BootstrapCSS} alt="HTML icon" />
            <p className="my-4">BootstrapCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
