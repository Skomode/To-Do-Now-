import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    user: any | null;
    login: (userData: any) => void
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined> (undefined);

export function AuthProvider( {children} : {children: ReactNode}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<any>(null);

    const login = (userData: any) => {
        setUser(userData);
        setIsAuthenticated(true);
        // localstorage cookie
    };

    const logout = () =>{
        setUser(null);
        setIsAuthenticated(false);
        // localstorage cookie remove
    };

    return (
        <AuthContext.Provider value ={{isAuthenticated, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext (AuthContext);
    if(!context) {
        throw new Error("useAuth should be used within AuthProvider")
    }
    return context;
}