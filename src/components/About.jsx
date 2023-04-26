import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#050A30] text-[#ccd6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#7EC8E3]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello! My name is Austin. I am a former manager seeking a career
              in programming.
            </p>
          </div>
          <div>
            <p>
              With almost a decade of experience in customer service and
              restaurant management, I bring strong communication,
              problem-solving, organizational, and leadership skills to my work
              as a web developer. I'm dedicated to creating user-friendly and
              accessible websites that meet the needs of both clients and
              end-users, while ensuring timely and effective delivery. My
              customer service background has given me a keen sense of how to
              listen to users' needs and concerns and communicate technical
              concepts in an understandable way. Likewise, my experience in
              restaurant management has taught me how to manage multiple
              projects efficiently, prioritize tasks, delegate responsibilities,
              and meet deadlines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
