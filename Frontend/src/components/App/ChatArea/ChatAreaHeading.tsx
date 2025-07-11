import { MdLocalPhone } from "react-icons/md";
import { ICON_SIZE } from "../../../lib/constants";
import { IoIosArrowBack, IoIosVideocam } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import Avatar from "../Avatar";
import useUpcomingFeature from "../../../hooks/useUpcomingFeature";
import useChats from "../../../hooks/useChats";
import { API_PUBLIC_URL } from "../../../lib/apiCenter/apiConfig";
import useWindowSize from "../../../hooks/useWindowSize";

const ChatAreaHeading = () => {
  const { setIsOpen } = useUpcomingFeature();
  const { name, status, photo } = useChats();
  const { width } = useWindowSize();
  const { dataSetter } = useChats();

  return (
    <header className="flex justify-between transition-colors duration-500 bg-bg p-4 py-2 mx-3 text-gray-700 items-center">
      <div className="flex items-center gap-3">
        {width <= 600 ? (
          <div
            className="justify-center flex items-center p-2 bg-fifth rounded-full cursor-pointer"
            onClick={() => {
              dataSetter({
                selectedChat: null,
              });
            }}
          >
            <IoIosArrowBack className="text-text text-lg" />
          </div>
        ) : (
          ""
        )}

        <Avatar
          src={API_PUBLIC_URL + "/" + photo}
          alt="profile picture"
          size="sm"
        />
        <div className="flex  justify-start flex-col">
          <h1 className=" transition-colors duration-500 text-2xl font-semibold text-text">
            {name}
          </h1>
          <p>{status}</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <MdLocalPhone
          size={ICON_SIZE}
          className="text-second transition-colors duration-500 cursor-pointer hover:text-third"
          onClick={() => setIsOpen(true)}
        />

        <IoIosVideocam
          size={ICON_SIZE}
          className="text-second transition-colors duration-500 cursor-pointer hover:text-third"
          onClick={() => setIsOpen(true)}
        />

        <HiDotsHorizontal
          size={ICON_SIZE}
          className="text-second transition-colors duration-500 cursor-pointer hover:text-third"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </header>
  );
};

export default ChatAreaHeading;
