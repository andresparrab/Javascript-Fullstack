import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../shared/global/provider/UserProvider";
import RoutingPaths from "../routes/RouthingPaths";
export const SignInView = () => {
  const [userName, setUserName] = useState();
  const [password, setpassword] = useState();
  const [authenticatedUser2, setauthenticatedUser2] = useContext(UserContext);
  const history = useHistory();

  //LOGIN FUNCTIONEN

  const login = () => {
    setauthenticatedUser2(userName);
    localStorage.setItem("username", userName);
    localStorage.setItem("password", password);
    history.push(RoutingPaths.homeView);
  };

  // const logout = () => {
  //   setauthenticatedUser2(userName);
  //   localStorage.removeItem("username");
  //   localStorage.removeItem("password");
  //   history.push("/signin");
  // };
  return (
    <div>
      <span>Enter user: </span>
      <input
        className="usertext"
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <span>Enter PASSWROD: </span>
      <input
        className="usertext"
        type="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={() => login()}>Login</button>
      <button onClick={() => alert(authenticatedUser2)}>Show User</button>

      <h1>user is: {userName}</h1>
      <br />
      <h1>password is: {password}</h1>
      <h1>authenticatedUser is: {authenticatedUser2}</h1>
    </div>
  );
};
