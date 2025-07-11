import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import useWindowSize from "../../hooks/useWindowSize";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const { width } = useWindowSize();

  useEffect(() => {
    const html = window.document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  const getIconSize = () => {
    if (width < 640) return 16;
    if (width < 768) return 18;
    return 20;
  };

  return (
    <div
      className="relative w-12 h-6 sm:w-14 sm:h-7 md:w-16 md:h-8 flex items-center dark:bg-fourth bg-fourth cursor-pointer rounded-full p-1"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <Moon
        className="text-first transition-colors duration-1000 ease-in-out"
        size={getIconSize()}
      />
      <div
        className={`
          absolute bg-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full 
          shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-in-out 
          items-center flex justify-center
          ${isDarkMode ? "translate-x-6 sm:translate-x-7 md:translate-x-8" : "translate-x-0"}
        `}
      ></div>
      <Sun
        className="ml-auto text-first transition-colors ease-in-out duration-1000"
        size={getIconSize()}
      />
    </div>
  );
};

export default ThemeToggle;
