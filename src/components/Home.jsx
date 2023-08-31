import React from "react";
import Typewriter from "typewriter-effect";
import { MdKeyboardArrowRight } from "react-icons/md";
import ProfilePhoto from "../assets/profile.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Jarald
          </h2>
          <div className="text-xl sm:text-4xl font-bold text-gray-500">
            <Typewriter
              options={{
                strings: [
                  "Front-end Developer",
                  "React Developer",
                  "UI Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
              }}
            />
          </div>
          <p className="text-gray-500 py-4">
            As a dedicated front-end developer, I merge creativity with
            technical skill to craft responsive designs, fluid animations, and
            user-centric interfaces. Dive into a collection of projects that
            showcase my commitment to pushing the boundaries of modern web
            development.
          </p>
          <div>
            <Link
              to="portfolio"
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer rounded-lg"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className="mb-2">
          <img
            src={ProfilePhoto}
            className="rounded-2xl mx-auto w-2/3"
            alt="profilePic"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
