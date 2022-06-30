import React, { useContext, useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { auth } from "../firebase-config";
import { useHistory } from "react-router-dom";
import { updatePassword } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase-config";
import { v4 } from "uuid";
import {coursesActions} from '../store/Courses/courses'

const Context = React.createContext();

export function useAuth() {
  return useContext(Context);
}

export function ContextProvider({ children }) {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  //FIREBASE FUNCTIONS
  function signup(email, password, firstName, lastName, role) {
    return auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      addData(cred.user.uid, firstName, lastName, role);
    });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password).then((cred) => {
      localStorage.setItem("id", cred.user.uid);
    });
  }

  function changePassword(newPassword) {
    updatePassword(currentUser, newPassword)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function sendPasswordReset(email) {
    return auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("Password reset sent!");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function logout() {
    history.push("/");
    return auth.signOut();
  }
  
  function uploadPhoto(userID, courseName, duration, photo) {
    try {
      if (photo == null) return;
      const imageRef = ref(storage, `/images${photo.name + v4()}`);
      uploadBytes(imageRef, photo).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
         await addCourse(userID, courseName, duration, url)
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  
  
  //REST API
  async function addData(uid, firstName, lastName, role) {
    try {
      await fetch("http://localhost:3001/api/user/addData", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          id: uid,
          firstName: firstName,
          lastName: lastName,
          role: role,
        }),
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  async function addCourse(userID, courseName, duration, url) {
    await fetch("http://localhost:3001/api/courses/addCourse", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userID,
        courseName: courseName,
        duration: duration,
        image: url,
      }),
    });
    dispatch(coursesActions.addCourse({
      id: userID,
      courseName: courseName,
      duration: duration,
      image: url
    }))
  }

  async function getUserInfo(id){
    return await fetch("http://localhost:3001/api/user/userData", {
     method: "Post",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       id: id
     })
     })
     .then(response => response.json())
     .then((actualData) => actualData)
  }

  async function getCourses(){
    return await fetch('http://localhost:3001/api/courses/getAllCourses')
    .then((response) => response.json())
  }



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    addData,
    changePassword,
    sendPasswordReset,
    uploadPhoto,
    getUserInfo,
    getCourses
  };

  return (
    <Context.Provider value={value}>
      {!loading && children}
    </Context.Provider>
  );
}
