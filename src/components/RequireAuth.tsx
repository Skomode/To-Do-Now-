// src/components/RequireAuth.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function RequireAuth() {
    const { isAuthenticated } = useAuth();   // ← desestructuración importante

    console.log("RequireAuth → isAuthenticated:", isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}