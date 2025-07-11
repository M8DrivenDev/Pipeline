import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IOverlayProps } from "../../lib/interfaces";

const Overlay = ({ signin, toggle, isSmallScreen }: IOverlayProps) => (
  <div
    className={`absolute ${
      isSmallScreen
        ? "top-1/2 left-0 w-full h-1/2"
        : "top-0 left-1/2 w-1/2 h-full"
    } overflow-hidden transition-all duration-1000 ease-in-out z-[50] ${
      signin
        ? isSmallScreen
          ? "rounded-t-[50px]"
          : "rounded-l-[50px]"
        : isSmallScreen
          ? "-translate-y-full rounded-b-[50px]"
          : "-translate-x-full rounded-r-[50px]"
    }`}
  >
    <div
      className={`bg-gradient-to-r from-second to-first dark:from-third dark:to-fourth text-[var(--color-text)] relative ${
        isSmallScreen
          ? "-top-full h-[200%] w-full"
          : "-left-full h-full w-[200%]"
      } transform transition-transform duration-1000 ease-in-out ${
        signin ? "" : isSmallScreen ? "translate-y-1/2" : "translate-x-1/2"
      }`}
    >
      <div
        className={`absolute flex items-center justify-center flex-col ${
          isSmallScreen ? "left-0 w-full h-1/2" : "top-0 h-full w-1/2"
        } p-0 px-10 text-center transition-transform duration-1000 ease-in-out ${
          signin
            ? isSmallScreen
              ? "-translate-y-[20%]"
              : "-translate-x-[20%]"
            : "translate-x-0 translate-y-0"
        }`}
      >
        <h1 className="font-bold text-4xl mb-4 text-white">
          Sign Up Securely, Chat with Confidence!
        </h1>
        <p className="text-sm  leading-5 tracking-wide text-white mb-8">
          Sign Up Now to Start Chatting and Connecting with Friends It’s Fast
          and Easy to Join the Conversation!
        </p>
        <button
          className="flex gap-2 items-center justify-center rounded-full dark:hover:bg-bg dark:hover:text-white bg-third text-bg dark:text-bg text-xs font-bold py-3 px-10 uppercase tracking-wider transition duration-300 ease-in hover:bg-bg hover:text-first dark:bg-first"
          onClick={() => toggle(true)}
        >
          <FaArrowLeft />
          Sign In
        </button>
      </div>
      <div
        className={`absolute ${
          isSmallScreen ? "bottom-0 w-full h-1/2" : "right-0 top-0 h-full w-1/2"
        } flex items-center justify-center flex-col p-0 px-10 text-center transition-transform duration-1000 ease-in-out ${
          signin
            ? "translate-x-0 translate-y-0"
            : isSmallScreen
              ? "translate-y-[20%]"
              : "translate-x-[20%]"
        }`}
      >
        <h1 className="font-bold text-4xl text-white mb-4">Welcome Back!</h1>
        <p className="text-sm leading-5 tracking-wide mb-8 text-white">
          Log In and Pick Up Right Where You Left Off!
        </p>
        <button
          className="flex gap-2 items-center justify-center rounded-full dark:hover:bg-bg dark:hover:text-white bg-third text-bg dark:text-bg text-xs font-bold py-3 px-10 uppercase tracking-wider transition duration-300 ease-in hover:bg-bg hover:text-first dark:bg-first"
          onClick={() => toggle(false)}
        >
          Sign Up
          <FaArrowRight />
        </button>
      </div>
    </div>
  </div>
);

export default Overlay;
