import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext();


export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  
  function logout(){
    history.push("/")
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  
  }, []);

  const value = {
    signup,
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
