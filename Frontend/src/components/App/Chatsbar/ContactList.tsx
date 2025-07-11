import { useEffect, useState } from "react";
import Contact from "./Contact";
import { useSocket } from "../../../hooks/useSocket";
import { IChatData } from "../../../lib/interfaces";
import { TContacts } from "../../../lib/types";

const ContactList = () => {
  const socket = useSocket();
  const [contacts, setContacts] = useState<TContacts | null>(null);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  useEffect(() => {
    if (!socket) return;

    const handleContacts = (data: TContacts) => {
      setContacts(data);
    };

    socket.emit("getContacts");

    socket.on("contactsUpdate", handleContacts);

    return () => {
      socket.off("contactsUpdate");
    };
  }, [socket]);

  return (
    <div className="py-3 px-4 overflow-auto h-screen">
      <h3 className="transition-colors duration-500 text-xs font-semibold uppercase text-gray-400 dark:text-gray-600 mb-1">
        Pipelines
      </h3>
      {contacts && contacts.length > 0 ? (
        <div className="divide-y divide-gray-300 dark:divide-gray-800 ">
          {contacts?.map((ele: IChatData) => {
            const otherParticipent = ele.participants[0];
            return (
              <Contact
                key={ele._id}
                src={otherParticipent.photo}
                contactName={otherParticipent.fullName}
                status={otherParticipent.status}
                lastMessage={ele.lastMessage.content}
                chatId={ele._id}
                userId={otherParticipent._id}
                selectedChatId={selectedChatId}
                setSelectedChatId={setSelectedChatId}
              />
            );
          })}
        </div>
      ) : (
        <h3 className="uppercase text-center transition-colors duration-500 text-sm font-semibold  text-gray-400 dark:text-gray-600 mb-1">
          There Is No Chats
        </h3>
      )}
    </div>
  );
};

export default ContactList;
