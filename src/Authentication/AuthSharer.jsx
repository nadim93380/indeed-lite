/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { app } from "./firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null)


const AuthSharer = ({ children }) => {
    const auth = getAuth(app)

    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)

    // Creat user with email pass
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User With email pass
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Login User With Google
    const googleProvidor = new GoogleAuthProvider()
    
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvidor)
    }
    // Login With GitHub
    const githubProvidor = new GithubAuthProvider()

    const signInWithGitHub = () => {
        return signInWithPopup(auth,githubProvidor)
    }

    // User state check 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
            }
        });
        return () => {
            unsubscribe()
        }
        
    }, [auth])
    
    // user Logout
    const logout = () => {
        return signOut(auth)
    }

    // Update user 
    const updateUserData = (name = false, photo = false)=>{
        if (name) {
            return updateProfile(user, {
                displayName: name
            })
        }
        if (photo) {
            return updateProfile(user, {
                photoURL: photo
            })
        }
    }


    const sharing = {
        creatUser,
        loginUser,
        user,
        setUser,
        logout,
        loading,
        setLoading,
        loginWithGoogle,
        signInWithGitHub,
        updateUserData
    }

    return (
        <AuthContext.Provider value={sharing}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthSharer;