import { HiChatAlt2 } from "react-icons/hi";
import { API_PUBLIC_URL } from "../../lib/apiCenter/apiConfig";
import useChats from "../../hooks/useChats";
import { useState } from "react";
import SecondaryLoader from "../App/Loaders/SecondaryLoader";
import useModal from "../../hooks/useModal";
import { useSocket } from "../../hooks/useSocket";
import { IGetChatData } from "../../lib/interfaces";

const FriendsList = ({
  src = `defaultProfilePhoto.jpg`,
  username = "username",
  contactName = "John Doe",
  id = "",
}) => {
  const { dataSetter } = useChats();
  const [isLoading, setIsLoading] = useState(false);
  const { setIsModalOpen } = useModal();
  const socket = useSocket();

  const handleChats = async () => {
    setIsLoading(true);
    const handleGettingChats = (data: IGetChatData) => {
      const user = data.chat.participants[0];
      if (!user.photo) user.photo = "defaultProfilePhoto.jpg";

      dataSetter({
        name: user.fullName,
        photo: user.photo,
        status: user.status,
        userId: user._id,
        selectedChat: data.chat._id,
        chatData: data,
      });
    };

    if (socket) {
      socket.emit("createNewChat", {
        chatType: "direct",
        participants: [id],
      });
      socket.on("getChats", handleGettingChats);
    }

    setIsLoading(false);
    setIsModalOpen(false);
  };

  return (
    <div className=" text-left p-3 rounded-lg ">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            className="rounded-full object-cover w-12 h-12"
            src={API_PUBLIC_URL + "/" + src}
            alt={contactName}
          />
          <div className="absolute bottom-0 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
            {contactName}
          </h4>
          <p className="text-sm text-gray-500 truncate">{username}</p>
        </div>
        <button
          className="flex justify-center items-center p-2 bg-fifth rounded-lg"
          onClick={() => handleChats()}
        >
          {isLoading ? (
            <SecondaryLoader />
          ) : (
            <HiChatAlt2 size={"23"} className="text-second" />
          )}
        </button>
      </div>
    </div>
  );
};

export default FriendsList;
