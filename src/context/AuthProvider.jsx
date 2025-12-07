import { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

import app from "../firebase/firebase.comfig";

export const AuthContext = createContext();

const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Create account
  const createUserWithEmailAndPasswordFunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email/password login
  const signInWithEmailFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google login
  const signInWithPopupFunc = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Update user profile
  const updateProfileFunc = (displayName, photoURL, email) => {
    return updateProfile(auth.currentUser, { displayName, photoURL, email });
  };

  // Logout
  const signoutUserFunc = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Track user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    signInWithPopupFunc,
    updateProfileFunc,
    signoutUserFunc,
    setUser,
    setLoading
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};
