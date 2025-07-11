import { useState, useEffect } from "react";
import SignUpForm from "../../components/Auth/SignUpForm";
import SignInForm from "../../components/Auth/SignInForm";
import Overlay from "../../components/Auth/OverLay";

const LoginSignup = () => {
  const [signin, setSignin] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-bg flex justify-center items-center min-h-screen p-4 transition-all duration-500 ease-in-out">
      <div
        className={`bg-third dark:bg-first text-text rounded-lg shadow-[0_14px_28px_rgba(0,0,0,0.25),_0_10px_10px_rgba(0,0,0,0.22)] relative overflow-hidden ${isSmallScreen ? "w-full" : "w-[75%]"} max-w-full ${isSmallScreen ? "h-[1000px]" : "min-h-[550px]"}`}
      >
        <div
          className={`absolute ${
            isSmallScreen ? "left-0 w-full" : "top-0 h-full"
          } transition-all duration-700 ease-in-out ${
            isSmallScreen ? "h-1/2" : "w-1/2"
          } ${
            signin
              ? "opacity-0 pointer-events-none"
              : isSmallScreen
                ? "translate-y-full opacity-100 z-20"
                : "translate-x-full opacity-100 z-20"
          }`}
        >
          <SignUpForm />
        </div>
        <div
          className={`absolute ${
            isSmallScreen ? "left-0 w-full" : "top-0 h-full"
          } transition-all duration-700 ease-in-out ${
            isSmallScreen ? "h-1/2" : "w-1/2"
          } ${
            signin
              ? "opacity-100 z-20"
              : isSmallScreen
                ? "translate-y-full opacity-0 pointer-events-none"
                : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <SignInForm />
        </div>
        <Overlay
          signin={signin}
          toggle={setSignin}
          isSmallScreen={isSmallScreen}
        />
      </div>
    </div>
  );
};

export default LoginSignup;
