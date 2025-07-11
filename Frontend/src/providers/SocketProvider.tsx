import { ReactNode, useEffect, useState } from "react";
import io from "socket.io-client";
import { SOCKET_URL } from "../lib/constants";
import { Socket } from "socket.io-client";
import { useUserData } from "../hooks/useUserData";
import SocketContext from "../contexts/SocketContext";

const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<typeof Socket | null>(null);
  const { userData } = useUserData();
  const userId = userData?._id;

  useEffect(() => {
    if (!userId) return;

    const newSocket = io(SOCKET_URL, {
      reconnection: true,
      autoConnect: true,
      reconnectionDelay: 1000,
      timeout: 1000,
      reconnectionAttempts: 10,
      query: { userId },
    });

    newSocket.on("connect", () => {
      newSocket.emit("requestFriendRequests");
    });

    newSocket.on("disconnect", (reason: unknown) => {
      console.log("Socket disconnected:", reason);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [userId]);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
