import { storage } from "./storage";

const ACCESS_TOKEN_KEY = "english_lms_access_token";

export const authToken = {
  get: () => storage.get(ACCESS_TOKEN_KEY),
  set: (token: string) => storage.set(ACCESS_TOKEN_KEY, token),
  clear: () => storage.remove(ACCESS_TOKEN_KEY),
};
