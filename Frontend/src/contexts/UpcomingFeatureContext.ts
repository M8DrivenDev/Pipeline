import { createContext } from "react";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const UpcomingFeature = createContext<IProps>({
  isOpen: false,
  setIsOpen: () => {},
});

export default UpcomingFeature;
