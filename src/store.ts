import { create } from "zustand";
import { devtools } from "zustand/middleware";

export enum Role {
  CUSTOMER = "customer",
  ADMIN = "admin",
  MANAGER = "manager",
}

export interface Tenant {
  id: number;
  name: string;
  address: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  tenant?: Tenant;
}

interface AuthState {
  user: null | User;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
  }))
);
