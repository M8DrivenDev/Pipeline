import { ReactNode, useEffect, useState } from "react";
import { IUserData } from "../lib/interfaces";
import UserContext from "../contexts/UserContext";
import { END_POINTS } from "../lib/apiCenter/apiConfig";

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<IUserData | null>(null);

  const filterUserData = async () => {
    try {
      const response = await fetch(END_POINTS.GET_USER_DATA, {
        method: "GET",
        credentials: "include",
      });

      const user = await response.json();

      if (!user.data.photo) user.data.photo = "defaultProfilePhoto.jpg";
      if (user.status === "success") {
        setUserData(user.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    filterUserData();
  }, []);

  const refetchUserData = async () => {
    await filterUserData();
  };

  const value = {
    userData,
    setUserData,
    refetchUserData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
