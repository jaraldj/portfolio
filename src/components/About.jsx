import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm a Front End developer based in India. My website creations
          prioritize universal user experiences and responsiveness. I'm
          intrigued by expanding my knowledge in building scalable distribution
          systems, and I have a genuine passion for problem-solving while
          emphasizing maintainable code. Through responsive design, I ensure
          accessibility to all users, regardless of their device.
        </p>

        <br />

        <p className="text-xl">Thanks for visiting!</p>
      </div>
    </div>
  );
};

export default About;
