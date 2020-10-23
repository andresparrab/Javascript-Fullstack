import React, { useState } from "react";
import "../components/LoginForm.css";
//LoginForm Function takes as props the Login funcion from App.js and the error object
function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    expiresAt: new Date().getTime(),
  }); //This are our local  details

  const submitHandler = (e) => {
    e.preventDefault(); // Prevents the Default behaviour of the event
    Login(details); // Pass the details ojects with its propreties { name: "", email: "", password: "" } to the Login functions
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })} //Onchange sets the email value in real time . from the e.target.value
            value={details.email} // the value in this case... it get it from the already updated details function and show it as the value in the input item.
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="pasword"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <div className="submit">
          <input type="submit" value="Login" />
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
