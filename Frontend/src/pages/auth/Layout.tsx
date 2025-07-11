import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import { useEffect, useState } from "react";
import PrimaryLoader from "../../components/App/Loaders/PrimaryLoader";
import { END_POINTS } from "../../lib/apiCenter/apiConfig";

const AuthLayout = () => {
  const [isAuth, setIsAuth] = useState<boolean | null | "serverDown">(null);

  const authenticate = async () => {
    try {
      const response = await fetch(END_POINTS.IS_LOGGED_IN, {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 401) {
        setIsAuth(false);
      }

      if (response.status === 500) {
        setIsAuth("serverDown");
      }
      if (response.status === 200) {
        setIsAuth(true);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
          window.location.href = "/server-down";
          return;
      }
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  if (isAuth === null) return <PrimaryLoader />;

  if (isAuth === true) return <Navigate to={"/app"} />;

  if (isAuth === "serverDown") return <Navigate to={"/server-down"} />;
  if (isAuth === false) {
    return (
      <div className="h-screen bg-bg ">
        <Navbar />
        <Outlet />
      </div>
    );
  }
};

export default AuthLayout;
