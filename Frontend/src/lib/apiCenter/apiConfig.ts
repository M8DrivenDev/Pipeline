import { endPointsType } from "../types";

export const API_BASE_URL = "http://localhost:3000/api/v1";
export const API_PUBLIC_URL = "http://localhost:3000/public";

export const END_POINTS: endPointsType = {
  SIGN_IN: `${API_BASE_URL}/auth/signin`,
  SIGN_UP: `${API_BASE_URL}/auth/signup`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  IS_LOGGED_IN: `${API_BASE_URL}/auth/`,
  GET_USER_DATA: `${API_BASE_URL}/users/`,
  DELETE_PROFILE_PICTURE: `${API_BASE_URL}/users/profile-photo`,
  UPDATE_PROFILE_PICTURE: `${API_BASE_URL}/users/upload`,
  PATCH_USER_DATA: `${API_BASE_URL}/users/`,
  SEARCH_FOR_FRIEND: `${API_BASE_URL}/friends/search`,
  GET_HEALTH: `${API_BASE_URL}/health`,
  SEND_FRIEND_REQUEST: `${API_BASE_URL}/friends/send`,
  GET_FRIEND_REQUESTS: `${API_BASE_URL}/friends/`,
  CREATE_NEW_CHAT: `${API_BASE_URL}/chats/createNewChat`,
  GET_FRIEND_DATA: `${API_BASE_URL}/users/`,
  GET_OLD_CHAT: `${API_BASE_URL}/chats/getExistingChat`,
  GET_CHAT_DATA: `${API_BASE_URL}/chats`,
};
