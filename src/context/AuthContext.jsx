import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

 
export const useAuthContext = () => {
    return useContext(AuthContext)
}

export function AuthContextProvider({ children }) {

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>

    )
}