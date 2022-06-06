import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { useHistory } from "react-router-dom";
import {  doc, setDoc } from "firebase/firestore";
import { updatePassword, reauthenticateWithCredential } from "firebase/auth";


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  
  function signup(email, password, firstName, lastName, role) {
    return auth.createUserWithEmailAndPassword(email, password).then(cred => {
      addData(cred.user.uid, firstName, lastName, role)
    })
  }
  
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  
/*   const changePassword = (currentPassword, newPassword) => {
    reauthenticateWithCredential(currentPassword).then(() => {
      updatePassword(currentUser, newPassword).then(() => {
        console.log("success");
      }).catch((error) => {
        console.error(error);
      });
    })
    
  } */
  
  function logout(){
    history.push("/")
    return auth.signOut();
  }

 async function addData(uid, firstName, lastName, role){
  try{
    await setDoc(doc(db, "users", uid), {
      firstName: firstName,
      lastName: lastName,
      role: role,
      avatar: "https://meiadose.com.pt/wp-content/uploads/2015/04/default-user-avatar.png"
    });
  }catch(err){
    console.error(err.message)
  }
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
    logout,
    addData,
    //changePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
