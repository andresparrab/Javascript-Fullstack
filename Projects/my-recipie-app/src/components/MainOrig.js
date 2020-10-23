import React, { useState } from "react";
import "../components/Main.css";
import LoginForm from "../components/LoginForm";

const Main = (props) => {
  const adminUser = {
    email: "admin@admin",
    password: "123",
  };
  s;

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    //Login function
    //console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
        password: details.password,
      });
      localStorage.setItem("user", details.name);
      localStorage.setItem("email", details.email);
      localStorage.setItem("password", details.password);
      console.log(details);
      console.log("Logged in to the amazing site");
    } else {
      console.log("Absolute not access");
      setError("Absolute not access");
    }
  };

  const Logout = () => {
    //Logout function
    console.log("Loggedout");
    setUser({ name: "", email: "", password: "" });
    localStorage.clear();
  };
  return (
    <div className="Main">
      <h1>{props.message}</h1>
      {props.showbutton === "false" ? (
        <p>Contact us at : xxx-xxx-xx2222 </p>
      ) : (
        <button type="button" className="btn btn-primary btn-lg">
          Sign In
        </button>
      )}
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
          <script>{alert(user.name)}</script>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default Main;
