import { Link } from "react-router-dom";
import homeImage from "../assets/homeImage.png";
import Feutures from "./Feutures";
function Home() {
  return (
    <>
      <div className="flex items-center flex-col-reverse  md:flex-row dark:hidden justify-between">
        {/* left */}
        <div className="md:w-1/2 space-y-5 mt-14 md:mt-0">
          <h2 className="text-2xl">New Products</h2>
          <h1 className="text-6xl">Flexible Chair</h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit.
            Commodi fugit dicta quibusdam
          </p>
          <button className=" bg-orange-600 px-5 text-white hover:text-orange-600 hover:bg-white shadow text-md py-2 transition-all duration-500">
            <Link to="/Products"> Show Now</Link>
          </button>
        </div>
        {/* right */}
        <div>
          <img src={homeImage} alt="" />
        </div>
      </div>{" "}
      <Feutures />
    </>
  );
}

export default Home;
