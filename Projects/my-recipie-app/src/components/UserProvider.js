import React, { useState, createContext } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [isAuthenticated, setisAuthenticated] = useState({
    name: "",
    email: "",
    password: "",
    auth: false,
  });
  return (
    <UserContext.Provider value={[isAuthenticated, setisAuthenticated]}>
      {props.children}
    </UserContext.Provider>
  );
};
