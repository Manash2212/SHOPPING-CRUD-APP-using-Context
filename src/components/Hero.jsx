import React from "react";
import women_img from "../img/woman_hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-pink-200 h-[700px] bg-hero bg-no-repeat bg-center bg-cover py-32 lg:py-24">
      <div className="container mx-auto flex justify-around h-ful">
        {/* for text */}
        <div className="flex flex-col justify-center">
          {/* pre title */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[3px] bg-red-500 mr-2"></div>
            New Trend
          </div>
          {/* title */}
          <h1 className="text-[60px] leading-[1.4] font-normal mb-4">
            SUMMER SALE STYLISH <br />
            <span className="font-bold">WOMENS</span>
          </h1>
          <Link
            to={`/`}
            className="uppercase self-start font-semibold border-b-2 border-primary"
          >
            Discover more
          </Link>
        </div>
        {/* for image */}
        <div>
          <img className="h-[600px] hidden lg:block" src={women_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
