import React, { createContext, useState, useEffect } from "react";

export const CurrentUser = createContext();

export function CurrentUserProvider({ children }) {
  const db = "http://localhost:3000/authentication/profile";

  const [currentUser, setCurrentUser] = useState(null);
  window.setCurrentUser = setCurrentUser;

  useEffect(() => {
    const getLoggedInUser = async () => {
      let response = await fetch(db, {
        credentials: "include",
      });
      let user = await response.json();
      setCurrentUser(user);
      console.log("this is current user from context", user);
    };
    getLoggedInUser();
  }, []);

  function UserLoggedOut() {
    setCurrentUser(null);
    console.log("log out pressed");
    console.log(currentUser);
  }

  return (
    <CurrentUser.Provider
      value={{ currentUser, setCurrentUser, UserLoggedOut }}
    >
      {children}
    </CurrentUser.Provider>
  );
}
