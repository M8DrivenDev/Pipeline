import fetchWrapper from "./fetchWrapper";
import { END_POINTS } from "./apiConfig";
import { IStateSignIn, IStateSignUp } from "../interfaces";

export const signUp = async (data: IStateSignUp) => {
  return await fetchWrapper({
    url: END_POINTS.SIGN_UP,
    options: { method: "POST", body: JSON.stringify(data) },
  });
};

export const signIn = async (data: IStateSignIn) => {
  return await fetchWrapper({
    url: END_POINTS.SIGN_IN,
    options: { method: "POST", body: JSON.stringify(data) },
  });
};

export const logOut = async () => {
  return await fetchWrapper({
    url: END_POINTS.LOGOUT,
    options: { method: "GET" },
  });
};

export const isLoggedIn = async () => {
  return await fetchWrapper({
    url: END_POINTS.IS_LOGGED_IN,
    options: { method: "GET" },
  });
};
