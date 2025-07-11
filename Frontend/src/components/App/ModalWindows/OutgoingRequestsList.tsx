import { FaUserXmark } from "react-icons/fa6";
import Avatar from "../Avatar";
import { TiArrowRightThick } from "react-icons/ti";
import { API_PUBLIC_URL } from "../../../lib/apiCenter/apiConfig";
import { MdDoubleArrow } from "react-icons/md";
import { IOutgoingRequests } from "../../../lib/interfaces";
import { useState } from "react";
import { useSocket } from "../../../hooks/useSocket";
import SecondaryLoader from "../Loaders/SecondaryLoader";

const OutgoingRequestsList = (value: IOutgoingRequests) => {
  const [loadingState, setLoadingState] = useState(false);
  const socket = useSocket();

  const cancelFriendRequest = (userId: string) => {
    if (socket) {
      setLoadingState(true);
      setTimeout(() => {
        socket.emit("cancelFriendRequest", userId);
        setLoadingState(false);
      }, 3000);
    }
  };

  return (
    <li className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-300">
      <div className="flex items-center p-4 gap-4">
        <div className="relative flex items-center">
          <div className="flex items-center">
            <Avatar
              src={
                value.from.photo
                  ? `${API_PUBLIC_URL}/${value.from.photo}`
                  : "./defaultProfilePhoto.jpg"
              }
              alt={`${value.from.username}'s avatar`}
              size="sm"
            />
            <div className="absolute left-6 z-10 h-8 w-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm border-2 border-white dark:border-gray-800">
              <MdDoubleArrow className="text-red-500 text-lg transform -rotate-45" />
            </div>
            <Avatar
              src={
                value.to.photo
                  ? `${API_PUBLIC_URL}/${value.to.photo}`
                  : "./defaultProfilePhoto.jpg"
              }
              alt={`${value.to.username}'s avatar`}
              size="sm"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="truncate font-semibold">
              {value.from.username}
            </span>
            <TiArrowRightThick className="text-red-500 flex-shrink-0" />
            <span className="truncate font-semibold">{value.to.username}</span>
          </div>

          <div className="flex items-center justify-between mt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {value.status}
            </span>

            {value.status === "pending" ? (
              <button
                onClick={() => cancelFriendRequest(value.to._id)}
                className="p-2 text-second  bg-gray-300 dark:bg-gray-100 dark:bg-gray-700/50 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                aria-label="Cancel friend request"
              >
                {loadingState ? (
                  <SecondaryLoader />
                ) : (
                  <FaUserXmark className="text-lg" />
                )}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default OutgoingRequestsList;
