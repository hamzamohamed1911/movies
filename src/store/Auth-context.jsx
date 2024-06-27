import React from 'react';
import { createContext, useState, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import { Auth ,firestore  } from "../firebase/config";
import { setDoc, doc } from "firebase/firestore";
import Cookies from 'js-cookie';


export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const signUp = (email, password, username) => {
        return createUserWithEmailAndPassword(Auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;

                await setDoc(doc(firestore, "users", user.uid), {
                    username: username,
                    email: email
                });

                setAuthUser(user);
                setIsLoggedIn(true);
            })
            .catch(err => {
                setError(err.message);
                throw err;
            });
    };

    const logIn = async(email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
            .then(userCredential => {
                setAuthUser(userCredential.user);
                setIsLoggedIn(true);
            })
            .catch(err => {
                setError(err.message);
                throw err;
            });
    };

    const logOut =async () => {
        return signOut(Auth)
        
            .then(() => {
                Cookies.remove('uid'); 

                setAuthUser(null);
                setIsLoggedIn(false);
            })
            .catch(err => {
                setError(err.message);
                throw err;
            });
    };

    const resetPassword =async (email) => {
        return sendPasswordResetEmail(Auth, email)
            .catch(err => {
                setError(err.message);
                throw err;
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
            setAuthUser(currentUser);
            setIsLoggedIn(!!currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        signUp,
        logIn,
        logOut,
        resetPassword,
        error,
        setError,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
