import { useContext } from "react";
import UpcomingFeature from "../contexts/UpcomingFeatureContext";

const useUpcomingFeature = () => {
  const context = useContext(UpcomingFeature);
  return context;
};

export default useUpcomingFeature;
