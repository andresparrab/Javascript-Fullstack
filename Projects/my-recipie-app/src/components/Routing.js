import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "./UserProvider";
import Main from "./Main";
import Recipes from "./Recipies";

const Routing = (props) => {
  const [isAuthenticated, setisAuthenticated] = useContext(UserContext);

  const blockRouteIfNotAuthenticated = (component) => {
    return isAuthenticated.auth ? component : Main;
  };
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={Main} />
        <Route exact path="/notfound" component={Main} />
        <Route
          exact
          path="/recipes"
          component={blockRouteIfNotAuthenticated(Recipes)}
        />
        <Route exact path="/loginFailed" component={Main} />
      </Switch>
    </Router>
  );
};

export default Routing;
