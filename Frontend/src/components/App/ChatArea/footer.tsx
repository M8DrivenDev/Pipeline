import { useState, useRef, ChangeEvent, KeyboardEvent, useEffect } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoIosCamera } from "react-icons/io";
import { IoMic, IoSend } from "react-icons/io5";
import useUpcomingFeature from "../../../hooks/useUpcomingFeature";
import { useSocket } from "../../../hooks/useSocket";
import useChats from "../../../hooks/useChats";

const ChatInput = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { setIsOpen } = useUpcomingFeature();
  const socket = useSocket();
  const { selectedChat, userId } = useChats();

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  const handleSendMsg = ({
    content,
    chatId,
    receiverId,
  }: {
    content: string;
    chatId: string | null;
    receiverId: string | null;
  }) => {
    if (socket && content.trim()) {
      socket.emit("message:send", { chatId, content, receiverId });
      setText("");
      if (textAreaRef.current) {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMsg({
        content: text,
        chatId: selectedChat,
        receiverId: userId,
      });
    }
  };

  return (
    <div className="relative flex items-center p-3 transition-colors duration-500">
      <div className="p-2 flex items-center justify-between gap-2 ">
        <IoMic
          className="text-text cursor-pointer transition-all duration-500 hover:text-second"
          size={"25"}
          onClick={() => setIsOpen(true)}
        />
        <IoIosCamera
          className="text-text cursor-pointer transition-all duration-500 hover:text-second"
          size={"25"}
          onClick={() => setIsOpen(true)}
        />
        <GrAttachment
          className="text-text cursor-pointer transition-all duration-500 hover:text-second"
          size={"17"}
          onClick={() => setIsOpen(true)}
        />
      </div>
      <textarea
        name="msgField"
        id="msgField"
        ref={textAreaRef}
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
        className="transition-colors duration-500 placeholder:transition-colors placeholder:duration-500 w-full no-scrollbar placeholder:text-text max-h-96 overflow-auto rounded-3xl p-2 pl-4 pr-10 focus:outline-none bg-fifth  text-text break-words resize-none "
        placeholder="Type a message..."
        rows={1}
      />
      <label htmlFor="msgField" className="absolute right-4 text-text">
        <div className="p-3">
          <IoSend
            className={`cursor-pointer transition-all duration-500 text-text hover:text-second transform ${
              text
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
            onClick={() =>
              handleSendMsg({
                content: text,
                chatId: selectedChat,
                receiverId: userId,
              })
            }
          />
        </div>
      </label>
    </div>
  );
};

export default ChatInput;
