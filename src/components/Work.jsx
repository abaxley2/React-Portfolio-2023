import React from "react";
import MarketFinder from "../assets/MarketFinder.png";
import GetMoneySmart from "../assets/GetMoneySmart.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#ccd6f6] bg-[#050A30]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#ccd6f6] border-[#7EC8E3]">
            Work
          </p>
          <p className="py-6">Check out Some of my projects</p>
        </div>

        <div
          //   style={{ backgroundImage: `url(${MarketFinder})` }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div
            style={{ backgroundImage: `url(${MarketFinder})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl fond-bold text-[#ccd6f6] tracking-wider">
                Market Finder Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
