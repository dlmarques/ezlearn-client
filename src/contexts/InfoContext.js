import React, { useContext } from "react";
import { db } from "../firebase-config";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { storage } from "../firebase-config";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { v4 } from "uuid";

const InfoContext = React.createContext();

export function useInfo() {
  return useContext(InfoContext);
}

export function InfoProvider({ children }) {
  

    async function getUserInfo(currentUser){
        const docRef = doc(db, "users", currentUser);
        const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      console.log("No such document!");
    }
      }

      async function uploadPhoto(photo, uid){
        const docRef = doc(db, "users", uid);
        try {
          if(photo == null) return;
         const imageRef = ref(storage, `/images${photo.name + v4()}`);
         uploadBytes(imageRef, photo).then((snapshot) => {
           getDownloadURL(snapshot.ref).then(async (url) => {
            await updateDoc(docRef, {
              avatar: url
            })
           })
         })
        } catch (error) {
          console.error(error)
        }
      }

  const value = {
    getUserInfo,
    uploadPhoto
  };

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
}
