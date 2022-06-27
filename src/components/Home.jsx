import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../assets/homeImage.png";
import Feutures from "./Feutures";
function Home() {
  return (
    <>
      <div className="flex items-center  flex-col-reverse md:flex-row justify-between">
        {/* left-side */}
        <div className="md:w-1/2 space-y-5 mt-14 md:mt-0">
          <h2 className="text-2xl">New Products</h2>
          <h1 className="text-6xl">flexible chair</h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
            Atque adipisci quibusdam fugiat
          </p>
          <button
            className="bg-orange-600 px-5 text-white hover:text-orange-500 hover:bg-white py-2 shadow transition-all
        duration-500"
          >
            <Link to="/Products">Shop now</Link>
          </button>
        </div>
        {/* right-side */}
        <div>
          <img src={HomeImage} alt="" />
        </div>
      </div>
      <Feutures />
    </>
  );
}

export default Home;
