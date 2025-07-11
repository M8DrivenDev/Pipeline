import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export const useUserData = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUserData must be used within a UserProvider");
  }

  return context;
};

export default UserContext;
