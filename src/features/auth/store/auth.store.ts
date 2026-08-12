import { create } from "zustand";

import { authToken } from "@/services/authToken";
import { storage } from "@/services/storage";

import type { AuthSession, AuthUser } from "../types";

interface AuthStoreState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isHydrating: boolean;
  setSession: (session: AuthSession) => void;
  setUser: (user: AuthUser | null) => void;
  logout: () => void;
}

const storedUser = storage.getUser();
const initialUser = storedUser
  ? { email: storedUser.email, name: storedUser.name }
  : null;

export const useAuthStore = create<AuthStoreState>((set) => ({
  user: initialUser,
  isAuthenticated: Boolean(authToken.get()) || Boolean(initialUser),
  isHydrating: false,

  setSession({ user, accessToken }) {
    authToken.set(accessToken);
    storage.setUser({
      email: user.email,
      name: user.fullName ?? user.name ?? user.email.split("@")[0],
    });
    set({
      user,
      isAuthenticated: true,
    });
  },

  setUser(user) {
    if (user) {
      storage.setUser({
        email: user.email,
        name: user.fullName ?? user.name ?? user.email.split("@")[0],
      });
    }
    set({ user });
  },

  logout() {
    authToken.clear();
    storage.clearUser();
    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));
