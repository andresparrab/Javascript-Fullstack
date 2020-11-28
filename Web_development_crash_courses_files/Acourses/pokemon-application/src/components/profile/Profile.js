import React, { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../../shared/global/provider/UserProvider";
import "./Profile.css";
import RoutingPaths from "../../routes/RouthingPaths";

//import { logout } from "../../view/SignInView/SignInView";
export const Profile = () => {
  const history = useHistory();
  const [signedUser, setauthenticatedUser] = useContext(UserContext); //// this is the global variable

  const logout = () => {
    setauthenticatedUser("");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    history.push(RoutingPaths.signInView);
  };
  return (
    <div className="profileWrapper">
      <span>
        <img
          className="userLogoImg"
          src={"https://thispersondoesnotexist.com/image"}
          alt="image here"
        />
      </span>
      <span className="Usertext">{signedUser}</span>
      <div className="profileDropDown">
        <a onClick={() => history.push(RoutingPaths.settingsView)}>Settings</a>

        <a
          className="linkProfile"
          onClick={() => history.push(RoutingPaths.profileView)}
        >
          Profile
        </a>
        <hr />
        <a onClick={() => logout()}>Logout</a>
      </div>
    </div>
  );
};
