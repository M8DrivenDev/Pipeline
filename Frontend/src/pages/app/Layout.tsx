import { Navigate, Outlet } from "react-router-dom";
import Modal from "../../components/Ui/Modal";
import Sidebar from "../../components/App/Sidebar";
import useUpcomingFeature from "../../hooks/useUpcomingFeature";
import UpcomingFeature from "../../components/Ui/UpcomingFeature";
import { useEffect, useState } from "react";
import PrimaryLoader from "../../components/App/Loaders/PrimaryLoader";
import { END_POINTS } from "../../lib/apiCenter/apiConfig";
import PhoneSidebar from "../../components/App/PhoneSidebar";
import useWindowSize from "../../hooks/useWindowSize";

const AppLayout = () => {
  const { isOpen, setIsOpen } = useUpcomingFeature();
  const [isAuth, setIsAuth] = useState<boolean | null | "serverDown">(null);
  const { width } = useWindowSize();

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

  if (isAuth === "serverDown") return <Navigate to={"/server-down"} />;

  if (isAuth === false) return <Navigate to={"/auth"} />;

  if (width <= 600) {
    return (
      <div className="transition-all justify-center items-center duration-500 bg-bg flex flex-row h-screen overflow-hidden">
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <UpcomingFeature close={() => setIsOpen(false)} />
        </Modal>

        <Outlet />
      </div>
    );
  }

  if (width > 600 && width <= 1024) {
    return (
      <div className="transition-all duration-500 bg-bg flex flex-row h-screen overflow-hidden">
        <PhoneSidebar />
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <UpcomingFeature close={() => setIsOpen(false)} />
        </Modal>

        <Outlet />
      </div>
    );
  } else
    return (
      <div className="transition-all duration-500 bg-bg flex flex-row h-screen overflow-hidden">
        <Sidebar />
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <UpcomingFeature close={() => setIsOpen(false)} />
        </Modal>

        <Outlet />
      </div>
    );
};

export default AppLayout;
