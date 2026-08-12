const USER_EMAIL_KEY = "brightkids_userEmail";
const USER_NAME_KEY = "brightkids_userName";
const LOGGED_IN_KEY = "brightkids_isLoggedIn";

const canUseStorage = () => typeof window !== "undefined" && Boolean(window.localStorage);

export interface StoredUser {
  email: string;
  name?: string;
}

export const storage = {
  get(key: string) {
    try {
      if (!canUseStorage()) {
        return null;
      }

      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },

  set(key: string, value: string) {
    try {
      if (!canUseStorage()) {
        return;
      }

      window.localStorage.setItem(key, value);
    } catch {
      // Storage may be blocked by browser policy or private mode.
    }
  },

  remove(key: string) {
    try {
      if (!canUseStorage()) {
        return;
      }

      window.localStorage.removeItem(key);
    } catch {
      // no-op
    }
  },

  getUser(): StoredUser | null {
    const email = storage.get(USER_EMAIL_KEY);
    if (!email) {
      return null;
    }

    return {
      email,
      name: storage.get(USER_NAME_KEY) ?? undefined,
    };
  },

  setUser(user: StoredUser) {
    storage.set(LOGGED_IN_KEY, "true");
    storage.set(USER_EMAIL_KEY, user.email);

    if (user.name) {
      storage.set(USER_NAME_KEY, user.name);
    }
  },

  clearUser() {
    storage.remove(LOGGED_IN_KEY);
    storage.remove(USER_EMAIL_KEY);
    storage.remove(USER_NAME_KEY);
  },

  isAuthenticated() {
    return storage.getUser() !== null;
  },
};
