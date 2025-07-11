import { useState } from "react";
import FriendsSection from "./FriendsSection";
import FriendRequestsSection from "./FriendRequestsSection";
import OnlineFriendsSection from "./OnlineFriendsSection";

const FriendsModal = () => {
  const [activeItem, setActiveItem] = useState("friends");

  const tabItems = [
    { id: "friends", label: "Friends" },
    { id: "friendRequests", label: "Friend Requests" },
    { id: "onlineFriends", label: "Online Friends" },
  ];

  return (
    <div className="p-2 sm:p-3">
      <ul className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-10 mt-2 sm:mt-4">
        {tabItems.map((item) => (
          <li
            key={item.id}
            className={`relative cursor-pointer text-sm sm:text-base transition-all duration-300 pb-1 ${
              activeItem === item.id
                ? "border-b-2 border-third text-third pointer-events-none"
                : "group text-text hover:text-second border-b-2 border-transparent"
            }`}
            onClick={() => setActiveItem(item.id)}
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-third transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
      <div className="relative mt-3 sm:mt-5">
        {tabItems.map((item) => (
          <div
            key={item.id}
            className={`transition-opacity duration-300 ${
              activeItem === item.id
                ? "opacity-100"
                : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
          >
            {item.id === "friends" && <FriendsSection />}
            {item.id === "friendRequests" && <FriendRequestsSection />}
            {item.id === "onlineFriends" && <OnlineFriendsSection />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsModal;
