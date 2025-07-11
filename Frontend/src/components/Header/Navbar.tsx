import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../Ui/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b-2 border-first transition-all duration-200">
      <nav className="flex flex-wrap justify-between items-center w-[90%] mx-auto py-1">
        <a href="#" className="flex items-center">
          <img
            src="/icon.svg"
            className="w-10 sm:w-8 md:w-10 lg:w-10 mx-2"
            alt="Pipeline Logo"
          />
          <p className="text-first text-lg sm:text-xl lg:text-2xl">Pipeline</p>
        </a>
        <div className="flex gap-4 sm:gap-6 lg:gap-8">
          <div className="flex justify-center lg:hidden">
            <ThemeToggle />
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-first hover:text-third transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:justify-center lg:items-center lg:w-auto overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 lg:opacity-100 lg:max-h-96"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 mt-4 lg:mt-0">
            <li className="relative group">
              <NavLink
                to={"#"}
                className="text-lg sm:text-xl hover:text-third transition-colors duration-200 text-first dark:text-text dark:hover:text-first"
              >
                Home
              </NavLink>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-third transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <NavLink
                to={"#"}
                className="text-lg sm:text-xl hover:text-third transition-colors duration-200 text-first dark:text-text dark:hover:text-first"
              >
                About Pipeline
              </NavLink>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-third transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <NavLink
                to={"#"}
                className="text-lg sm:text-xl hover:text-third transition-colors duration-200 text-first dark:text-text dark:hover:text-first"
              >
                Get In Touch
              </NavLink>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-third transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center ml-5">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
