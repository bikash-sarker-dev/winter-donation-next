import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import AuthContext from "../contextApi/authContextApi";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   register account working
  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login account working
  const accountLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout account working
  const accountLogout = () => {
    return signOut(auth);
  };

  const resetPasswordForUser = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  console.log(user);
  useEffect(() => {
    const clearFun = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser);

      setLoading(false);
    });

    return () => {
      clearFun();
    };
  }, []);

  const userInfo = {
    createAccount,
    accountLogin,
    loading,
    user,
    setUser,
    setLoading,
    accountLogout,
    resetPasswordForUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
