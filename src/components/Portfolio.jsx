import React from "react";
import consultancy from "../assets/consultancy.jpg";
import exportingWeb from "../assets/exportingWeb.jpg";
import resumeBuild from "../assets/resumeBuild.jpg";
import foodApp from "../assets/foodApp.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: consultancy,
    },
    {
      id: 2,
      src: exportingWeb,
    },
    {
      id: 3,
      src: resumeBuild,
    },
    {
      id: 4,
      src: foodApp,
    },
  ];

  return (
    <div
      name="portfolio"
      className="md:min-h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white md:pt-16"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-2">
          {portfolios.map(({ id, src }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-1 m-4 hover:scale-105 duration-200">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-1 m-4 hover:scale-105 duration-200">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
