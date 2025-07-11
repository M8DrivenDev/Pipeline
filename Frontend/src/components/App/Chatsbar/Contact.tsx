import { useEffect, useState } from "react";
import useChats from "../../../hooks/useChats";
import { API_PUBLIC_URL } from "../../../lib/apiCenter/apiConfig";
import { getChatData } from "../../../lib/apiCenter/chatService";
import { IChat, IContact } from "../../../lib/interfaces";
import { useSocket } from "../../../hooks/useSocket";

const Contact = ({
  src = `defaultProfilePhoto.jpg`,
  contactName = "John Doe",
  lastMessage,
  chatId,
  status,
  userId,
  selectedChatId,
  setSelectedChatId,
}: IContact) => {
  const { dataSetter } = useChats();
  const socket = useSocket();
  const [lastMsg, setLastMsg] = useState(lastMessage);

  const handleChats = async () => {
    dataSetter({ isChatLoading: true });
    const chatData = await getChatData(chatId);
    console.log(chatData);
    dataSetter({
      name: contactName,
      status,
      photo: src,
      userId: userId,
      selectedChat: chatId,
      isChatLoading: false,
      chatData: chatData,
    });
    setSelectedChatId(chatId);
  };

  useEffect(() => {
    if (socket) {
      const handleUpdateLastMsg = (msg: IChat) => {
        if (msg._id === chatId) {
          setLastMsg(msg.lastMessage.content);
        }
      };
      socket.on("contacts:update", handleUpdateLastMsg);
      return () => {
        socket.off("contacts:update");
      };
    }
  }, [socket, chatId]);

  return (
    <button
      className={`w-full text-left p-3 rounded-lg transition-all duration-200 group ${
        selectedChatId === chatId
          ? "bg-indigo-100 dark:bg-indigo-900 dark:text-white"
          : ""
      } hover:bg-fifth  dark:hover:text-white`}
      onClick={handleChats}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            className="rounded-full object-cover w-12 h-12 border-2 border-transparent group-hover:border-gray-200 transition-all duration-200"
            src={API_PUBLIC_URL + "/" + src}
            alt={contactName}
          />
          <div className="absolute bottom-0 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
            {contactName}
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 truncate">
            {lastMsg}
          </p>
        </div>
      </div>
    </button>
  );
};

export default Contact;
