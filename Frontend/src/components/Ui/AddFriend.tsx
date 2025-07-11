import { IoMdPersonAdd } from "react-icons/io";
import { IAddFriend } from "../../lib/interfaces";
import { useSocket } from "../../hooks/useSocket";

const AddFriend = ({ userId, setIsLoading }: IAddFriend) => {
  const socket = useSocket();

  const sendFrindRequest = (userId: string) => {
    setTimeout(() => {
      if (socket) {
        socket.emit("sendFriendRequest", userId);
      }
      setIsLoading(false);
    }, 3000);
  };
  return (
    <button
      className="bg-third p-3 rounded-lg text-text border-none outline-none"
      onClick={() => {
        setIsLoading(true);
        sendFrindRequest(userId);
      }}
    >
      <IoMdPersonAdd />
    </button>
  );
};

export default AddFriend;
