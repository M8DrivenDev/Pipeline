import { END_POINTS } from "./apiConfig";
import fetchWrapper from "./fetchWrapper";

export const getChatData = async (chatId: string) => {
  return await fetchWrapper({
    url: `${END_POINTS.GET_CHAT_DATA}/${chatId}`,
    options: { method: "GET" },
  });
};
