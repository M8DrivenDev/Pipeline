import { ReactNode, useState } from "react";
import ChatsContext from "../contexts/ChatsContext";
import { TChatsState } from "../lib/types";

const ChatsProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<TChatsState>({
    status: null,
    name: null,
    selectedChat: null,
    photo: null,
    userId: null,
    isChatLoading: false,
    chatData: null,
  });

  const dataSetter = (newData: Partial<TChatsState>) => {
    setData((prev) => ({
      ...prev,
      ...newData,
    }));
  };
  const value = {
    ...data,
    dataSetter,
  };
  return (
    <ChatsContext.Provider value={value}>{children} </ChatsContext.Provider>
  );
};

export default ChatsProvider;
