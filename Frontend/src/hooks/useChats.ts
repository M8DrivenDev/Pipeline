import { useContext } from "react";
import ChatsContext from "../contexts/ChatsContext";

const useChats = () => {
  const context = useContext(ChatsContext);
  return context;
};

export default useChats;
