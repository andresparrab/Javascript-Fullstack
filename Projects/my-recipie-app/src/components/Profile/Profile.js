import React, { useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../../shared/global/provider/UserProvider";
import "./Profile.css";
import RoutingPaths from "../../routes/RouthingPaths";

export const Profile = () => {
  const history = useHistory();
  const [authenticatedUser, setauthenticatedUser] = useContext(UserContext); //// this is the global variable
  console.log("this is inside PROFIEL : ", authenticatedUser);
  const Username = localStorage.getItem("user");

  console.log("this is inside PROFIEL : ", authenticatedUser);

  const logout = () => {
    setauthenticatedUser("");
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    localStorage.removeItem("auth");
    history.push(RoutingPaths.homeView);
  };
  return (
    <div>
      <span>
        <img
          className="userLogoImg"
          src={"https://thispersondoesnotexist.com/image"}
          alt="image here"
        />
      </span>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* <ul id="navbarSupportedContent"> */}

        <div className="nav-item dropdown">
          <span
            className="navbar-brand"
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            //   role="button"
            data-toggle="dropdown"
            //   aria-haspopup="true"
            //   aria-expanded="false"
          >
            {Username}
          </span>
          <div className="dropdown-menu bg-dark">
            <li className="nav-item">
              <span
                className="navbar-brand"
                onClick={() => history.push(RoutingPaths.profileView)}
              >
                profile
              </span>
            </li>
            <li className="nav-item">
              <span
                className="navbar-brand"
                onClick={() => history.push(RoutingPaths.recipeView)}
              >
                recipes
              </span>
            </li>
            <li className="nav-item">
              <span
                className="navbar-brand"
                onClick={() => history.push(RoutingPaths.settingsView)}
              >
                settings
              </span>
            </li>

            <li className="nav-item">
              <span
                className="navbar-brand"
                onClick={() => history.push(RoutingPaths.aboutView)}
              >
                about
              </span>
            </li>
            <hr />
            <li className="nav-item">
              <span className="navbar-brand" onClick={() => logout()}>
                logout
              </span>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
