import React, { useContext } from "react";

const InfoContext = React.createContext();

export function useInfo() {
  return useContext(InfoContext);
}

export function InfoProvider({ children }) {
  

    async function getUserInfo(currentUser){
         return await fetch("http://localhost:3001/api/user/userData", {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: currentUser
          })
          })
          .then(response => response.json())
          .then((actualData) => actualData)
      }


  const value = {
    getUserInfo
  };

  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
}
