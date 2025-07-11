import { ReactNode, useState } from "react";
import ModalContext from "../contexts/ModalContext";

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const value = {
    isModalOpen,
    setIsModalOpen,
  };
  return (
    <ModalContext.Provider value={value}> {children}</ModalContext.Provider>
  );
};

export default ModalProvider;
