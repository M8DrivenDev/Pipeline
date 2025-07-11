import { IoMdClose, IoMdSearch } from "react-icons/io";
import { IGetChatData, ISearchbar } from "../../lib/interfaces";
import Avatar from "../App/Avatar";
import { API_PUBLIC_URL } from "../../lib/apiCenter/apiConfig";
import HighlightText from "./HighlightText";
import { FaPhoneAlt } from "react-icons/fa";
import AddFriend from "./AddFriend";
import { useState } from "react";
import SecondaryLoader from "../App/Loaders/SecondaryLoader";
import ContactLoader from "../App/ModalWindows/ContactLoader";
import { HiChatAlt2 } from "react-icons/hi";
import useChats from "../../hooks/useChats";
import useModal from "../../hooks/useModal";
import { useSocket } from "../../hooks/useSocket";

const SearchBar = ({
  input,
  handleChange,
  loadingState,
  users = [],
  debouncedSearch,
}: ISearchbar) => {
  const [loadingUserId, setLoadingUserId] = useState<string | null>(null);
  const { dataSetter } = useChats();
  const { setIsModalOpen } = useModal();
  const socket = useSocket();

  const handleChats = async (id: string) => {
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

    setIsModalOpen(false);
  };

  const handleClear = () => {
    handleChange({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>);
  };
  return (
    <div>
      <div className="relative   bg-transparent rounded-2xl shadow-md p-1.5 mt-2  border-gray-300 dark:border-gray-800 border">
        <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-text">
          <IoMdSearch size={"25"} />
        </div>
        <input
          type="text"
          id="friendsSearchbar"
          value={input}
          onChange={handleChange}
          className="peer w-full pl-9  py-[5px] text-base text-gray-600 dark:text-gray-400 bg-transparent rounded-lg focus:outline-none"
        />
        {input && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-text hover:text-gray-500 transition-colors"
          >
            <IoMdClose size={"20"} />
          </button>
        )}
        <label
          htmlFor="friendsSearchbar"
          className={`peer-focus:top-[-11px] peer-focus:left-[18px] peer-focus:scale-90 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-third cursor-text absolute top-3 left-10 text-text bg-bg transition-all duration-300 ${input ? "scale-90 top-[-11px] left-[18px] text-sm font-semibold text-third" : ""} `}
        >
          Search
        </label>
      </div>

      <ul
        className={`
        ${debouncedSearch ? "opacity-100" : "opacity-0 hidden"}
        transition-all duration-300
        max-h-72 overflow-y-auto
        backdrop-blur-xl
        rounded-xl shadow-lg
        mt-2
        divide-y divide-gray-200/10
        bg-white/10
        no-scrollbar
        h-40
      `}
      >
        {loadingState ? (
          <>
            <ContactLoader />
            <ContactLoader />
            <ContactLoader />
          </>
        ) : (
          users.map((ele, index) => (
            <li
              key={index}
              className="hover:bg-gray-500/5 transition-colors duration-200"
            >
              <div className="flex items-center space-x-4 p-3">
                <Avatar
                  src={
                    ele.photo
                      ? `${API_PUBLIC_URL}/${ele.photo}`
                      : `${API_PUBLIC_URL}/defaultProfilePhoto.jpg`
                  }
                  size="md"
                  alt="Profile picture"
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 truncate">
                    <HighlightText text={ele.fullName} highlight={input} />
                  </div>

                  <div className="text-xs text-gray-500 truncate flex">
                    <p className="text-second text-xs transition-colors duration-500 font-bold">
                      @
                    </p>

                    <HighlightText text={ele.username} highlight={input} />
                  </div>

                  {ele.phone && (
                    <div className="text-xs text-gray-500 truncate flex items-center gap-1">
                      <FaPhoneAlt size={"10"} className="text-second" />

                      <HighlightText text={ele.phone} highlight={input} />
                    </div>
                  )}
                </div>
                {loadingUserId === ele.username ? (
                  <div className="bg-third p-3 rounded-lg text-text border-none outline-none">
                    <SecondaryLoader />
                  </div>
                ) : !ele.isFriend ? (
                  <AddFriend
                    userId={ele._id}
                    setIsLoading={(loading) => {
                      if (loading) {
                        setLoadingUserId(ele.username);
                      } else {
                        setLoadingUserId(null);
                      }
                    }}
                  />
                ) : loadingUserId === ele._id ? (
                  <div className="p-2 bg-fifth rounded-lg cursor-pointer ">
                    <SecondaryLoader />
                  </div>
                ) : (
                  <button
                    className="p-2 bg-fifth rounded-lg cursor-pointer "
                    onClick={() => handleChats(ele._id)}
                  >
                    <HiChatAlt2 size={"23"} className="text-second" />
                  </button>
                )}
              </div>
            </li>
          ))
        )}

        {!loadingState && users.length === 0 && input && debouncedSearch && (
          <li className=" py-6 text-center text-gray-500 items-center">
            No users found !
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
