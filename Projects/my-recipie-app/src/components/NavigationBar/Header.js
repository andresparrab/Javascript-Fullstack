import React, { useContext } from "react";
import { UserContext } from "../../shared/global/provider/UserProvider";
import Logo from "../../shared/images/logo.svg";
import "./Header.css";
import { useHistory } from "react-router-dom";
import RoutingPaths from "../../routes/RouthingPaths";
import { Profile } from "../Profile/Profile";

const Header = (props) => {
  const history = useHistory();
  const [isAuthenticated, setisAuthenticated] = useContext(UserContext);

  const showLogoutIfSigned = () => {
    return isAuthenticated && localStorage.getItem("auth") ? (
      <div className="profile">
        <Profile />
      </div>
    ) : (
      <div>
        <span
          onClick={() => history.push(RoutingPaths.mainView)}
          className=" navbar-brand"
        >
          Sign in
        </span>

        <span
          className="navbar-brand"
          onClick={() => history.push(RoutingPaths.aboutView)}
        >
          About
        </span>
      </div>
    );
  };

  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img
          onClick={() => history.push(RoutingPaths.homeView)}
          className="logo"
          src={Logo}
          alt="error..."
        />

        <span
          className="navbar-brand"
          onClick={() => history.push(RoutingPaths.homeView)}
        >
          <span
            className="favo"
            onClick={() => history.push(RoutingPaths.homeView)}
          >
            Naruto Favorite recipes
          </span>
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          area-aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ml-auto">{showLogoutIfSigned()}</div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
