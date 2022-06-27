import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  SearchIcon,
  SunIcon,
  ShoppingBagIcon,
  MenuIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { useTheme } from "next-themes";
function Header() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between">
      {/* left */}
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
        <MenuIcon className="w-6" />
      </div>
      {/* right */}

      {/* desktop menu */}
      <div className=" items-center space-x-10 hidden md:flex">
        <Link to="/">Home</Link>
        <Link to="/About">About </Link>
        <Link to="/Products">Products</Link>
        <SearchIcon className="w-6" />
        {/* dark mode toggle */}
        {theme === "dark" ? (
          <MoonIcon
            className="w-7 cursor-pointer "
            onClick={() => setTheme("light")}
          />
        ) : (
          <SunIcon
            className="w-7 cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        )}
        <ShoppingBagIcon className="w-7 cursor-pointer" />
      </div>

      {/* mobile menu */}
      <div
        className={`  items-center space-y-24 flex md:hidden flex-col absolute left-0 top-20 h-screen w-screen bg-white pt-24
          shadow-lg ${open ? "flex" : "hidden"}
        `}
      >
        <Link to="/">Home</Link>
        <Link to="/About">About </Link>
        <Link to="/Products">Products</Link>
        <SearchIcon className="w-6" />
        <SunIcon className="w-7" />
        <ShoppingBagIcon className="w-7" />
      </div>
    </div>
  );
}

export default Header;
