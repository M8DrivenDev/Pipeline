import { useEffect, useState } from "react";
import { useSocket } from "../../../hooks/useSocket";
import {
  IFriendRequests,
  IIncomingRequests,
  IOutgoingRequests,
} from "../../../lib/interfaces";
import OutgoingRequestsList from "./OutgoingRequestsList";
import IncomingRequestsList from "./IncomingRequestsList";

const FriendRequestsSection = () => {
  const [incomingRequests, setIncomingRequests] = useState<[]>();
  const [outgoingRequests, setOutgoingRequests] = useState<[]>();
  const [incomingRequestsCount, setIncomingRequestsCount] = useState(0);
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;
    const handleFriendRequests = (data: IFriendRequests) => {
      setIncomingRequests(data.incomingRequests);
      setOutgoingRequests(data.outgoingRequests);
      const pendingCount = Array.isArray(data.incomingRequests)
        ? data.incomingRequests.filter(
            (req: IIncomingRequests) => req.status === "pending",
          ).length
        : 0;
      setIncomingRequestsCount(pendingCount);
    };

    socket.emit("requestFriendRequests");
    socket.on("getFriendRequests", handleFriendRequests);
    return () => {
      socket.off("getFriendRequests", handleFriendRequests);
    };
  }, [socket]);

  return (
    <div className="flex flex-col justify-center items-center mt-3 text-text font-medium text-sm sm:text-lg p-2 sm:p-0">
      {incomingRequestsCount > 0 && (
        <h1 className="text-text text-xs sm:text-md mb-2">
          You have{" "}
          <span className="text-second font-mono font-semibold">
            {incomingRequestsCount}
          </span>{" "}
          new requests
        </h1>
      )}
      <ul className="w-full max-w-md transition-all duration-300 overflow-y-auto no-scrollbar max-h-60">
        <h3 className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-600 mb-1">
          Incoming Requests
        </h3>
        {incomingRequests && incomingRequests?.length > 0 ? (
          incomingRequests?.map((value: IIncomingRequests) => (
            <IncomingRequestsList {...value} key={value._id} />
          ))
        ) : (
          <h3 className="text-center text-xs sm:text-sm font-semibold uppercase text-second mb-1">
            No incoming requests!
          </h3>
        )}
        <h3 className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-600 mb-1 mt-4">
          Outgoing Requests
        </h3>
        {outgoingRequests && outgoingRequests?.length > 0 ? (
          outgoingRequests?.map((value: IOutgoingRequests) => (
            <OutgoingRequestsList {...value} key={value._id} />
          ))
        ) : (
          <h3 className="text-center text-xs sm:text-sm font-semibold uppercase text-second mb-1">
            No outgoing requests!
          </h3>
        )}
      </ul>
    </div>
  );
};

export default FriendRequestsSection;
