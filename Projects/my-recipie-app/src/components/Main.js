import React, { useContext, useState } from "react";
import "../components/Main.css";
import LoginForm from "../components/LoginForm";
import { useLocation } from "react-router-dom";
//import Recipess from "./Recipies";
import { UserContext } from "../components/UserProvider";

const Main = (props) => {
  // const LOGIN_SUCCESS_PAGE = "/recipes";
  //const LOGIN_FAILURE_PAGE = "/loginFailed";
  let location = useLocation();

  const adminUser = {
    email: "admin@admin",
    password: "123",
  };

  const [isAuthenticated, setisAuthenticated] = useContext(UserContext);
  const [error, setError] = useState("");

  const Login = (details) => {
    //Login function
    //console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setisAuthenticated({
        name: details.name,
        email: details.email,
        password: details.password,
        auth: true,
      });
      let expiresAt = "";
      expiresAt = JSON.stringify(expiresAt * 1000 + new Date().getTime());
      localStorage.setItem("user", details.name);
      localStorage.setItem("email", details.email);
      localStorage.setItem("password", details.password);
      localStorage.setItem("expires_at", expiresAt);

      console.log(details);
      console.log("Logged in to the amazing site");
      // location.pathname = LOGIN_SUCCESS_PAGE;
    } else {
      console.log("Absolute not access");
      setError("Absolute not access");
      //location.pathname = LOGIN_FAILURE_PAGE;
    }
  };

  // const isAuthenticated = () => {
  //   let expiresAt = localStorage.getItem("expires_at");
  //   return new Date().getTime() < expiresAt;
  // };

  const Logout = () => {
    //Logout function
    console.log("Loggedout");
    setisAuthenticated({ name: "", email: "", password: "" });
    localStorage.clear();
    location.pathname = "/";
  };
  return (
    <div className="Main">
      <h1>{props.message}</h1>
      {props.showbutton === "false" ? (
        <p>Contact us at : xxx-xxx-xxx </p>
      ) : null}

      {isAuthenticated.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{isAuthenticated.name}</span>
          </h2>
          {/* this is  the  logout button orange */}
          <button onClick={Logout}>Logout</button>{" "}
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default Main;
