import React, { useContext } from "react";
import "./NavigationBar.css";
import Logo from "../../shared/images/logo.svg";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../shared/global/provider/UserProvider";
import { Profile } from "../profile/Profile";
import RoutingPaths from "../../routes/RouthingPaths";

export const NavigationBar = () => {
  const history = useHistory();

  const [signedUser, setauthenticatedUser] = useContext(UserContext); //// this is the global variable

  const signedOrNot = () => {
    return signedUser ? (
      <div className="profile">
        <Profile />
      </div>
    ) : (
      <span
        onClick={() => history.push(RoutingPaths.signInView)}
        className="signIn"
      >
        Sign in
      </span>
    );
  };

  return (
    <div className="navWrapper">
      <img
        onClick={() => history.push(RoutingPaths.homeView)}
        className="logo"
        src={Logo}
        alt="error..."
      />
      {signedOrNot()}
    </div>
  );
};
