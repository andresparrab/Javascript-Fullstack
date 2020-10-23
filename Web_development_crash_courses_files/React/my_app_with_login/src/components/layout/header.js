import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link to="/" style={LinkStyle}>
        Home
      </Link>{" "}
      |{" "}
      <Link to="/about" style={LinkStyle}>
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const LinkStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
};

export default Header;
