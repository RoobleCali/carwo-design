import React from "react";
import img1 from "../assets/aboutImg1.jpeg";
import img2 from "../assets/aboutImg2.jpeg";

function About() {
  return (
    <div>
      <div>
        <h1 className="text-center text-xl leading-10   ">
          Furns is a global furniture destination for somethings. We sell
          cutting-edge <br /> furniture and offer a wide variety of
          fashion-related content
        </h1>
      </div>
      <div className="flex items-center flex-col md:flex-row space-x-3">
        <div className="space-y-4 mt-5">
          <img src={img1} alt="" />

          <h1>OUR STORES</h1>
          <p className="text-gray-400 text-sm leading-7">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet
            conse ctetur adipisicing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div className="space-y-4 mt-5">
          <img src={img1} alt="" />

          <h1>OUR MISSION</h1>
          <p className="text-gray-400 text-sm leading-7">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet
            conse ctetur adipisicing elit, sed do eiusmod tempor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
