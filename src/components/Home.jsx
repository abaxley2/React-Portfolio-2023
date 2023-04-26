import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#050A30]">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#7EC8E3]">Hello! My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Austin Baxley
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#7EC8E3] ">
          I am a full-stack web developer
        </h2>
        <p className="text-[#ccd6f6] py-4 max-w-[700px]">
          My combination of experience in web development and business
          management sets me apart. My communication and collaboration skills
          with both technical and non-technical stakeholders make me a valuable
          addition to any team.
        </p>
        <div>
          <button className="text-white group font-bold border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7EC8E3] hover:border-[#7EC8E3]">
            View Work
            <span className="group-hover:rotate-180 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
