import { IChatData, IGetChatData } from "./interfaces";

export type inputType = "number" | "email" | "password" | "text";

export type endPointsType = {
  SIGN_IN: string;
  SIGN_UP: string;
  LOGOUT: string;
  IS_LOGGED_IN: string;
  GET_USER_DATA: string;
  DELETE_PROFILE_PICTURE: string;
  UPDATE_PROFILE_PICTURE: string;
  PATCH_USER_DATA: string;
  GET_HEALTH: string;
  SEARCH_FOR_FRIEND: string;
  SEND_FRIEND_REQUEST: string;
  GET_FRIEND_REQUESTS: string;
  CREATE_NEW_CHAT: string;
  GET_FRIEND_DATA: string;
  GET_OLD_CHAT: string;
  GET_CHAT_DATA: string;
};

export type TContacts = IChatData[];

export type TChatsState = {
  status: string | null;
  name: string | null;
  selectedChat: string | null;
  photo: string | null;
  userId: string | null;
  isChatLoading: boolean;
  chatData: IGetChatData | null;
};
