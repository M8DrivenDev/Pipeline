import {
  ButtonHTMLAttributes,
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";
import { TChatsState } from "./types";

export interface IStateSignUp {
  fullName: string;
  username: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IStateSignIn {
  userIdentifier: string;
  signInPassword: string;
}

export interface IFormAction {
  type: "UPDATE_FIELD";
  field: string;
  value: string;
}

export interface IApiFeildError {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}

export interface IApiErrorResponse {
  status: "fail" | "success" | "error";
  errors: IApiFeildError[];
}

export interface IAvatar {
  src: string;
  alt: string;
  size: string;
}

export interface IAvatarSize {
  [key: string]: string;
}

export interface IContactProps {
  src: string;
  contactName: string;
  lastMsg: string;
}

export interface KeyValue {
  [key: string]: string;
}
export interface IModalHeading {
  headingList: string[];
}

export interface IModalType {
  type: "userSettings" | "friends" | string;
  isOpen: boolean;
  close: () => void;
}
export interface IFetchWrapper {
  url: string;
  options: RequestInit;
}
export interface IUserData {
  _id?: string;
  email?: string;
  username?: string;
  phone?: string;
  fullName?: string;
  isValid?: boolean;
  photo?: string;
  status?: string;
  createdAt?: string;
}

export interface IUserSettingsInput
  extends InputHTMLAttributes<HTMLInputElement> {
  isLoading: boolean;
  value: string;
  name: "fullName" | "username" | "phone" | "email";
  err: boolean;
  errMsg?: string;
}

export interface ITextLoader {
  w: string;
  h: string;
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export interface IUserSettings {
  onClose: () => void;
}

export interface IPatchUserData {
  fullName?: string;
  username?: string;
  phone?: string;
  email?: string;
}

export interface IErrorElement {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}

export interface ISearchbar {
  input: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  loadingState: boolean;
  users: KeyValue[];
  debouncedSearch: string;
}

export interface IHighlightTextProps {
  text: string | number;
  highlight: string;
  className?: string;
}

export interface IAddFriend {
  userId: string;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IUserContextType {
  userData: IUserData | null;
  setUserData: React.Dispatch<React.SetStateAction<IUserData | null>>;
  refetchUserData: () => Promise<void>;
}

export interface IFriendRequests {
  incomingRequests: SetStateAction<[] | undefined>;
  outgoingRequests: SetStateAction<[] | undefined>;
}

export interface IOutgoingRequests {
  _id: string;
  from: {
    _id: string;
    username: string;
    photo: string;
  };
  to: {
    _id: string;

    username: string;
    photo: string;
  };
  status: string;
  date: string;
}

export interface IIncomingRequests {
  _id: string;
  from: {
    _id: string;
    username: string;
    photo: string;
  };
  to: {
    _id: string;
    username: string;
    photo: string;
  };
  status: string;
  date: string;
}

export interface IOverlayProps {
  signin: boolean;
  toggle: (value: boolean) => void;
  isSmallScreen: boolean;
}

export interface IChat {
  _id: string;
  admins: string[];
  lastMessage: IMessage;
  participants: IParticipantData[];
  type: "direct" | "group";
  updatedAt: Date;
}

export interface IMessage {
  chatId: string;
  content: string;
  contentType: "text" | "file";
  createdAt: Date;
  readBy: IUserData[];
  sender: string;
  status: "sent" | "deleverd" | "read";
  _id: string;
  updatedAt: Date;
}

export interface IGetChatData {
  chat: IChat;
  messages: IMessage[];
}

export interface IChatsContext {
  status: TChatsState["status"];
  name: TChatsState["name"];
  selectedChat: TChatsState["selectedChat"];
  photo: TChatsState["photo"];
  userId: TChatsState["userId"];
  isChatLoading: TChatsState["isChatLoading"];
  chatData: TChatsState["chatData"];
  dataSetter: (newData: Partial<TChatsState>) => void;
}

export interface IContact {
  src: string;
  contactName: string;
  lastMessage: string;
  chatId: string;
  status: string;
  userId: string;
  selectedChatId: string | null;
  setSelectedChatId: Dispatch<SetStateAction<string | null>>;
}

export interface IChatData {
  _id: string;
  lastMessage: IMessage;
  participants: IParticipantData[];
}

export interface IParticipantData {
  _id: string;
  email: string;
  username: string;
  phone: string;
  fullName: string;
  photo: string;
  status: string;
}

export interface ICreateChat {
  _id: string;
  chat: IChatData;
}
