import { IPatchUserData } from "../interfaces";
import { END_POINTS } from "./apiConfig";
import fetchWrapper from "./fetchWrapper";

export const getUserData = async () => {
  return await fetchWrapper({
    url: END_POINTS.GET_USER_DATA,
    options: { method: "GET" },
  });
};

export const deleteProfilePicture = async () => {
  return await fetchWrapper({
    url: END_POINTS.DELETE_PROFILE_PICTURE,
    options: { method: "DELETE" },
  });
};

export const updateProfilePicture = async (photo: File) => {
  const formData = new FormData();
  formData.append("avatar", photo, photo.name);

  return await fetchWrapper({
    url: END_POINTS.UPDATE_PROFILE_PICTURE,
    options: { method: "POST", body: formData },
  });
};

export const patchUserData = async (data: IPatchUserData) => {
  return await fetchWrapper({
    url: END_POINTS.PATCH_USER_DATA,
    options: { method: "PATCH", body: JSON.stringify(data) },
  });
};

export const getFriendData = async (data: { id: string }) => {
  return await fetchWrapper({
    url: END_POINTS.GET_FRIEND_DATA,
    options: { method: "POST", body: JSON.stringify(data) },
  });
};
