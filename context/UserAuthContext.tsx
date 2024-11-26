'use client'
import { auth } from "@/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContext {
    user : User | null
    loading: boolean
}

const userAuthContext = createContext<AuthContext | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, []);

    return (
        <userAuthContext.Provider value={{user, loading}}>
            {children}
        </userAuthContext.Provider>
    )
}

export const useAuth = (): AuthContext => {
    const context = useContext(userAuthContext);

    if(!context){
        throw new Error("useAuth must be used within AuthProvider")
    }
    return context;
}