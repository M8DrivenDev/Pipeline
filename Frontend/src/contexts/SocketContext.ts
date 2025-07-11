import { createContext } from "react";
import { Socket } from "socket.io-client";

const SocketContext = createContext<typeof Socket | null>(null);

export default SocketContext;
