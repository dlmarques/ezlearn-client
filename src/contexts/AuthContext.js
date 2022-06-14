import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { useHistory } from "react-router-dom";
import { updatePassword, sendPasswordResetEmail } from "firebase/auth";


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
    return auth.signInWithEmailAndPassword(email, password).then(cred => {
      localStorage.setItem("id", cred.user.uid)
    });
  }
  
   const changePassword = (newPassword) => {
      updatePassword(currentUser, newPassword).then(() => {
        console.log("success")
      }).catch((error) => {
        console.error(error);
      })
    
  } 

  function sendPasswordReset(email){
    return auth.sendPasswordResetEmail(email).then(() => {
      console.log("Password reset sent!");
    }).catch((error) => {
      console.error(error);
    })
  }
  
  function logout(){
    history.push("/")
    return auth.signOut();
  }

 async function addData(uid, firstName, lastName, role){
  try{
    await fetch("http://localhost:3001/api/user/addData", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
            id: uid,
            firstName: firstName,
            lastName: lastName,
            role: role
          }),
        })
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
    changePassword,
    sendPasswordReset
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
