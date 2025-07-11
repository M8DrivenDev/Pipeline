import { createContext } from "react";
import { IUserContextType } from "../lib/interfaces";

const UserContext = createContext<IUserContextType | undefined>(undefined);

export default UserContext;
