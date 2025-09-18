import { User } from "@supabase/supabase-js";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean,
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  clearAuthState: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        isLoggedIn: false,
        setUser: (user) => set({ user, isLoggedIn: !!user}),
        setToken: (token) => set({ token }),
        clearAuthState: () => set({ user: null, token: null, isLoggedIn: false}),
      }),
      {
        name: "auth-storage",
      }
    ),
    { name: "AUTH_STORE" }
  )
);

export const useAuth = () => useAuthStore((state) => state);
export const useUser = () => useAuthStore((state) => state.user);
export const useToken = () => useAuthStore((state) => state.token);
export const useSetToken = () => useAuthStore((state) => state.setToken);
export const useSetUser = () => useAuthStore((state) => state.setUser);
export const useClearAuthState = () => useAuthStore((state) => state.clearAuthState);
