import { ChangeEvent, useEffect, useState } from "react";
import SearchBar from "../../Ui/SearchBar";
import useDebounce from "../../../hooks/useDebounce";
import { searchForFriend } from "../../../lib/apiCenter";
import { useSocket } from "../../../hooks/useSocket";
import { TContacts } from "../../../lib/types";
import { IUserData } from "../../../lib/interfaces";
import FriendsList from "../../Ui/FriendsList";

const FriendsSection = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [users, setUsers] = useState([]);
  const debouncedSearch = useDebounce(searchText);
  const [contacts, setContacts] = useState<TContacts | null>(null);
  const socket = useSocket();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      const users = await searchForFriend({ search: debouncedSearch });
      setUsers(users.users);
      setIsLoading(false);
    };

    if (debouncedSearch) loadUsers();
    if (!debouncedSearch) setUsers([]);

    if (!socket) return;
    const handleContacts = (data: TContacts) => {
      setContacts(data);
    };

    socket.emit("getAcceptedFriends");
    socket.on("sendFriends", handleContacts);
    return () => {
      socket.off("sendFriends");
    };
  }, [socket, debouncedSearch]);

  return (
    <div className="relative transition-all duration-500 container mx-auto px-2 sm:px-4 my-2 flex flex-col justify-center items-center">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-md px-2">
        <SearchBar
          input={searchText}
          handleChange={handleChange}
          loadingState={isLoading}
          users={users}
          debouncedSearch={debouncedSearch}
        />
      </div>
      <ul className="pt-16 sm:pt-20 w-full max-w-md">
        {contacts && contacts.length > 0 ? (
          <div className="divide-y divide-gray-300 dark:divide-gray-800">
            {contacts?.map((ele: IUserData, idx) => {
              if (!ele.photo) ele.photo = "defaultProfilePhoto.jpg";
              return (
                <FriendsList
                  key={idx}
                  src={ele.photo}
                  contactName={ele.fullName}
                  username={ele.username}
                  id={ele._id}
                />
              );
            })}
          </div>
        ) : (
          <li className="text-center">
            <h3 className="uppercase text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-600">
              No Friends
            </h3>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FriendsSection;
