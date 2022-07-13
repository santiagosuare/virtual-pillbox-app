import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import JwtDecode from "jwt-decode";

export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
    const token = localStorage.getItem("token");
    const defaultState = token ? JwtDecode(token) : null;
    const [user, setUser] = React.useState(defaultState);

    const login = (token) => {
        localStorage.setItem("token", token);
        setUser(JwtDecode(token));
    }
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    }
    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return React.useContext(AuthContext);
}

export function RequireAuth({ children }) {
    const auth = useAuth();
    const location = useLocation();
    console.log( auth );
    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}