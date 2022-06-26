import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center text-center justify-between">
      {/* logo */}
      <img src={logo} alt="" className="dark:text-white" />
      <div className="flex items-center space-x-2">
        <div className="md:hidden">
          {theme === "dark" ? (
            <MoonIcon
              onClick={() => setTheme("light")}
              className="w-7 cursor-pointer"
            />
          ) : (
            <SunIcon
              onClick={() => setTheme("dark")}
              className="w-7 cursor-pointer"
            />
          )}
        </div>
        <div
          className="cursor-pointer  md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon className="w-7" /> : <MenuIcon className="w-7" />}
        </div>{" "}
      </div>

      {/* nav items */}
      <div className=" items-center  text-lg text-gray-600 dark:text-white  space-x-10 hidden md:flex ">
        <Link to="/">Home </Link>
        <Link to="/About">About </Link>
        <Link to="/Products">Products </Link>
        <SearchIcon className="w-6 cursor-pointer" />
        <div className="">
          {theme === "dark" ? (
            <MoonIcon
              onClick={() => setTheme("light")}
              className="w-7 cursor-pointer"
            />
          ) : (
            <SunIcon
              onClick={() => setTheme("dark")}
              className="w-7 cursor-pointer"
            />
          )}
        </div>
        <ShoppingBagIcon className="w-6 cursor-pointer" />
      </div>

      {/* mobile nav items */}

      <div
        className={` items-center   text-lg bg-white shadow-2xl h-screen w-screen text-gray-600 
         flex-col absolute left-0 top-24 transition-all duration-200
         space-y-14 pt-24
         ${isOpen ? "flex" : "hidden"}`}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="/products" onClick={() => setIsOpen(false)}>
          Products{" "}
        </Link>{" "}
        <SearchIcon className="w-6 cursor-pointer" />
        <ShoppingBagIcon className="w-6 cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
