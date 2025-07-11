import { IFetchWrapper } from "../interfaces";

const delay = (delayInms: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

const fetchWrapper = async ({ url, options = {} }: IFetchWrapper) => {
  await delay(3000);
  try {
    const isFormData = options.body instanceof FormData;

    const response = await fetch(url, {
      ...options,
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...options.headers,
      },
      credentials: "include",
    });

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      if (response.status === 401) {
        window.location.href = "/auth";
      }
      if (response.status === 500) {
        window.location.href = "/server-down";
      }

      return await response.json();
    } else {
      return response;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (
        error.message.includes("Failed to fetch") ||
        error.message.includes("NetworkError")
      ) {
        window.location.href = "/server-down";
        return;
      }
    }
    throw error;
  }
};

export default fetchWrapper;
