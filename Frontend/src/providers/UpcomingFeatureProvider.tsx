import { ReactNode, useState } from "react";
import UpcomingFeature from "../contexts/UpcomingFeatureContext";

interface IProps {
  children: ReactNode;
}
const UpcomingFeatureProvider = ({ children }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <UpcomingFeature.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </UpcomingFeature.Provider>
  );
};

export default UpcomingFeatureProvider;
