import ChatArea from "../../components/App/ChatArea";
import Chatsbar from "../../components/App/Chatsbar";
import ChatsLoader from "../../components/App/Loaders/ChatLoader";
import PhoneSidebar from "../../components/App/PhoneSidebar";
import useChats from "../../hooks/useChats";
import useWindowSize from "../../hooks/useWindowSize";

const App = () => {
  const { width } = useWindowSize();
  const { isChatLoading, selectedChat } = useChats();

  if (width <= 600) {
    return (
      <>
        {isChatLoading ? (
          <div className="flex justify-center items-center">
            <ChatsLoader />
          </div>
        ) : selectedChat ? (
          <>
            <div className="flex h-screen flex-1 overflow-hidden">
              <ChatArea />
            </div>
          </>
        ) : (
          <>
            <PhoneSidebar />
            <div className="flex h-screen flex-1 overflow-hidden">
              <Chatsbar />
            </div>
          </>
        )}
      </>
    );
  }
  if (width > 600 && width <= 1024) {
    return (
      <div className="flex h-screen flex-1 overflow-hidden">
        <Chatsbar />
        <ChatArea />
      </div>
    );
  } else
    return (
      <div className="flex h-screen flex-1 overflow-hidden">
        <Chatsbar />
        <ChatArea />
      </div>
    );
};
export default App;
