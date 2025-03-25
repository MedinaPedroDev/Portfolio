import { createContext, useContext, useState, useEffect, useRef } from "react";
import EN from '../language/en.json'
import ES from '../language/es.json'
const AuthContext = createContext();

 
export const useAuthContext = () => {
    return useContext(AuthContext)
}

export function AuthContextProvider({ children }) {
    const [languaje, setLanguaje] = useState(navigator.language || 'en-US')
    const [contentPage, setContentPage] = useState(EN)
    const [darkMode, setdarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

    // ---------------------------- DARK MODE ----------------------------

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    // ---------------------------- LANGUAJE ----------------------------
    

    useEffect(() => {
        if(languaje === 'en-US'){
            setContentPage(EN)
            document.lang='en'
        }else if(languaje === 'es-ES'){
            setContentPage(ES)
            document.lang='es'
        }else{
            setContentPage(EN)
            document.lang='en'
        }
        
    }, [languaje])



    return (
        <AuthContext.Provider value={{setdarkMode, darkMode, contentPage, languaje, setLanguaje}}>
            {children}
        </AuthContext.Provider>

    )
}