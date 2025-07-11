import { useEffect, useRef, useState } from "react";
import useChats from "../../../hooks/useChats";
import { useUserData } from "../../../hooks/useUserData";
import IncomingMsgs from "./IncomingMsgs";
import OutgoingMsgs from "./OutgoingMsgs";
import { useSocket } from "../../../hooks/useSocket";
import { IMessage } from "../../../lib/interfaces";

//TODO: FIX ALL THE ERRORS HERE
const ChatMsgs = () => {
  const { chatData } = useChats();
  const { userData } = useUserData();
  const socket = useSocket();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatData?.messages) {
      setMessages(chatData.messages);
    }

    if (socket) {
      const handleReceivedMsg = (data: IMessage) => {
        if (chatData?.chat._id === data.chatId) {
          setMessages((prev) => [...prev, data]);
        }
      };
      socket.on("message:receive", handleReceivedMsg);
      return () => {
        socket.off("message:receive");
      };
    }
  }, [socket, chatData]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const isMessageOutgoing = (senderId: string) => {
    return senderId === userData?._id;
  };

  return (
    <div className="transition-all duration-500 h-screen overflow-y-auto p-4 pb-0">
      {messages?.map((message) =>
        isMessageOutgoing(message.sender) ? (
          <OutgoingMsgs
            key={message._id}
            content={message.content}
            time={new Date(message.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
        ) : (
          <IncomingMsgs
            key={message._id}
            content={message.content}
            time={new Date(message.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
        ),
      )}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatMsgs;
