import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "./UserProvider";
import Main from "./Main";
import Recipes from "./Recipies";
import About from "./About";
import NotFound from "./NotFound";
import Home from "./Home";

const Routing = (props) => {
  const [isAuthenticatedhere, setisAuthenticatedhere] = useContext(UserContext);

  const CheckAuth = () => {
    return localStorage.getItem("auth") === "true" ? true : false;
  };
  console.log("Check AUTH: ", CheckAuth());
  console.log("Check AUTH: ", localStorage.getItem("auth"));

  console.log(
    "Before enter blockRouteIfAuthenticated //// ",
    isAuthenticatedhere
  );
  //setisAuthenticatedhere(isAuthenticatedhere);
  const blockRouteIfNotAuthenticated = (component) => {
    return isAuthenticatedhere.auth ? Main : component;
  };

  useEffect(() => {
    CheckAuth();
    // return () => {
    //   cleanup;
    // };
  }, []); //[input]);

  const blockRouteIfAuthenticated = (component) => {
    return CheckAuth() ? component : Main;
  };
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path="/" component={blockRouteIfAuthenticated(Home)} />
        <Route
          exact
          path="/about"
          component={blockRouteIfAuthenticated(About)}
        />
        <Route
          exact
          path="/notfound"
          component={blockRouteIfAuthenticated(NotFound)}
        />
        <Route
          exact
          path="/recipes"
          component={blockRouteIfAuthenticated(Recipes)}
        />
        <Route exact path="/loginFailed" component={Main} />
      </Switch>
    </Router>
  );
};

export default Routing;
