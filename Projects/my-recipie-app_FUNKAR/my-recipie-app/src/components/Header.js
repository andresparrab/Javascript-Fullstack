import React, { useContext, useState } from "react";
import { UserContext } from "../components/UserProvider";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  let location = useLocation();
  const [isAuthenticated, setisAuthenticated] = useContext(UserContext);

  const showLogoutIfSigned = () => {
    console.log("Inside showlogoutifsigned: ", localStorage.getItem("auth"));
    return localStorage.getItem("auth") ? (
      <li className="nav-item">
        <a className="nav-link" onClick={Logout}>
          Logout
        </a>
      </li>
    ) : null;
  };

  const Logout = () => {
    //Logout function
    console.log("Loggedout");
    setisAuthenticated({ name: "", email: "", password: "" });
    localStorage.clear();
    location.pathname = "/";
  };
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Favorite recipes
        </a>
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/recipes">
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            {showLogoutIfSigned()}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
