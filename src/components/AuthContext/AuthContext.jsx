import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import JwtDecode from "jwt-decode";

export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = React.useState(null);

    const token = localStorage.getItem('token');

    const value = token ? { user: JwtDecode(token)  } : {};

    return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return React.useContext(AuthContext);
}

export function RequireAuth({ children }) {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}