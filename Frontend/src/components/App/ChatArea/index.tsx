import useChats from "../../../hooks/useChats";
import ChatAreaHeading from "./ChatAreaHeading";
import ChatMsgs from "./ChatMsgs";
import ChatFooter from "./footer";
import PipelineArea from "./PipelineArea";
import ChatsLoader from "../Loaders/ChatLoader";

const ChatArea = () => {
  const { selectedChat, isChatLoading } = useChats();

  if (isChatLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-8 flex-1">
        <ChatsLoader />
      </div>
    );
  }

  return (
    <div className="w-full divide-y divide-gray-400 dark:divide-gray-800  flex flex-col">
      {selectedChat ? (
        <>
          <ChatAreaHeading />
          <ChatMsgs />
          <ChatFooter />
        </>
      ) : (
        <PipelineArea />
      )}
    </div>
  );
};

export default ChatArea;
