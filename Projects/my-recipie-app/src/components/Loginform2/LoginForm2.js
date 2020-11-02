import React, { useState } from "react";
import "./LoginForm2.css";

export const Loginform2 = ({ Login, error }) => {
  const url =
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";

  function dynamicallyLoadScript(url, callback) {
    var head = document.head;
    var script = document.createElement("script"); // create a script DOM node
    script.src = url; // set its src to the provided URL
    script.type = "text/javascript";

    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
  }
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    auth: false,
  });

  // $("#login-button").click(function (event) {
  //   event.preventDefault();
  //   Login(details);

  //   $("form").fadeOut(500);
  //   $(".wrapper").addClass("form-success");
  // });

  const submitHandler = (e) => {
    e.preventDefault(); // Prevents the Default behaviour of the event
    Login(details); // Pass the details ojects with its propreties { name: "", email: "", password: "" } to the Login functions
    // console.log("details in the LoginForm Login(details : ", details);
  };

  return (
    <div>
      <div class="wrapper4">
        <div class="container4">
          <h1>Welcome</h1>

          <form class="form4" onSubmit={submitHandler}>
            <input
              type="tex4t"
              placeholder="Username"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
            <input
              type="email"
              placeholder="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
            <button type="submit" id="login-button">
              Login
            </button>
          </form>
        </div>

        <ul class="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Loginform2;
