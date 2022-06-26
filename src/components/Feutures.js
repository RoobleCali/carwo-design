import React from "react";
import bed from "../assets/bed.png";
import living from "../assets/living.png";
import drinking from "../assets/drinking.png";
import lounch from "../assets/lounch.png";

function Feutures() {
  return (
    <div>
      <h1 className="text-center text-xl">Feutures</h1>
      <div className="grid  grid-cols-2 lg:grid-cols-4  gap-14 mt-14 ">
        <div className="flex items-center border-2 rounded-full border-gray-600 py-10 px-14 w-40 h-40 space-y-4 flex-col hover:border-gray-200 transition-all duration-300 cursor-pointer">
          <img src={bed} alt="" />
          <h1>Bedroom</h1>
        </div>
        <div className="flex items-center border-2 rounded-full border-gray-600 py-10 px-14 w-40 h-40 space-y-4 flex-col hover:border-gray-200 transition-all duration-300 cursor-pointer">
          <img src={living} alt="" className="dark:text-white" />
          <h1>living</h1>
        </div>
        <div className="flex items-center border-2 rounded-full border-gray-600 py-10 px-14 w-40 h-40 space-y-4 flex-col hover:border-gray-200 transition-all duration-300 cursor-pointer">
          <img src={drinking} alt="" />
          <h1>drinking</h1>
        </div>
        <div className="flex items-center border-2 rounded-full border-gray-600 py-10 px-14 w-40 h-40 space-y-4 flex-col hover:border-gray-200 transition-all duration-300 cursor-pointer">
          <img src={lounch} alt="" />
          <h1>launch</h1>
        </div>
      </div>
    </div>
  );
}

export default Feutures;
