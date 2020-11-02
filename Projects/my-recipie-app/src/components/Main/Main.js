import React, { useContext, useState } from "react";
import "./Main.css";
// import LoginForm from "../LoginForm/LoginForm";
import LoginForm from "../Loginform2/LoginForm2";
import { UserContext } from "../../shared/global/provider/UserProvider";

const Main = (props) => {
  const adminUser = {
    email: "admin@admin",
    password: "123",
  };

  const [isAuthenticated, setisAuthenticated] = useContext(UserContext);
  const [error, setError] = useState("");
  // setisAuthenticated((details) => ({ ...details, auth: true }));

  // const updateAuth = () =>
  //   setisAuthenticated((isAuthenticated) => ({
  //     ...isAuthenticated,
  //     auth: true,
  //     name: "mongo",
  //   }));

  const Login = (details) => {
    //Login function

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setisAuthenticated((isAuthenticated) => ({
        ...isAuthenticated,
        auth: true,
        name: details.name,
        email: details.email,
        password: details.password,
      }));
      console.log("This is un login func DETAILS: ----->", isAuthenticated);
      localStorage.setItem("user", details.name);
      localStorage.setItem("email", details.email);
      localStorage.setItem("password", details.password);
      localStorage.setItem("auth", details.auth);
    } else {
      setError("Absolute not access");
    }
    console.log("This is AFTER login func DETAILS333: ----->", isAuthenticated);
  };
  return (
    <>
      <div className="Main">
        {/* <LoginForm Login={Login} error={error} /> */}
        <LoginForm Login={Login} error={error} />
      </div>
    </>
  );
};

export default Main;
