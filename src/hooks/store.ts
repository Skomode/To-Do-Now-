import {create} from "zustand";

export interface User { 
    username: string;
    password: string;
    email: string;

}

type AuthStore = {
    logged: boolean;
    user: User | null;
}

export const useAuthStore = create<AuthStore>(() => ({
     logged: false,
     user: null
}));

