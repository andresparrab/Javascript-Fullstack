import React, { useState, createContext } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [isUser, setisUser] = useState({
    name: "",
    email: "",
    password: "",
    auth: false,
  });
  return (
    <UserContext.Provider value={[isUser, setisUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
