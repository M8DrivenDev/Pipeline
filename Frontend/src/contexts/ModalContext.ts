import { createContext, Dispatch, SetStateAction } from "react";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<IProps>({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export default ModalContext;
