import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../configs/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }

    const signInWithGoogle = (googleProvider) =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });
        return () =>unsubscribe();
    },[])
    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        logIn,
        signInWithGoogle,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}    
        </AuthContext.Provider>
    );
};

export default AuthProvider;