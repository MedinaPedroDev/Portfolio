import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

 
export const useAuthContext = () => {
    return useContext(AuthContext)
}

export function AuthContextProvider({ children }) {
    const [darkMode, setdarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <AuthContext.Provider value={{setdarkMode, darkMode}}>
            {children}
        </AuthContext.Provider>

    )
}