import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "../shared/global/provider/UserProvider";
import Main from "../components/Main/Main";
import Recipes from "../components/Recipies/Recipies";
import About from "../views/About";
import HomeView from "../views/HomeView";
import ProfileView from "../views/ProfileView";
import settignsView from "../views/settingsView";
import RoutingPaths from "./RouthingPaths";
import Home from "../views/HomeView";

const Routing = (props) => {
  const [authenticatedUser2, setauthenticatedUser2] = useContext(UserContext);

  const CheckAuth = () => {
    return authenticatedUser2 && localStorage.getItem("auth")
      ? true
      : undefined;
  };

  useEffect(() => {
    CheckAuth();
    console.log(
      "This is in the routing inside UseEFFECT ",
      localStorage.getItem("auth")
    );
    // return () => {
    //   cleanup;
    // };
  }, []); //[input]);

  const blockrouteIfAuthenticated = (component) => {
    return CheckAuth() ? HomeView : component;
  };

  const blockrouteIfNotAuthenticated = (component) => {
    return !CheckAuth() ? Main : component;
  };
  return (
    <Router>
      {props.children}
      <Switch>
        {/* <Route
          exact
          path={RoutingPaths.homeView}
          component={blockRouteIfAuthenticated(HomeView)}
        /> */}
        <Route
          exact
          path={RoutingPaths.profileView}
          component={blockrouteIfNotAuthenticated(ProfileView)}
        />
        <Route
          exact
          path={RoutingPaths.recipeView}
          component={blockrouteIfNotAuthenticated(Recipes)}
        />
        <Route
          exact
          path={RoutingPaths.settingsView}
          component={blockrouteIfNotAuthenticated(settignsView)}
        />
        <Route exact path={RoutingPaths.aboutView} component={About} />
        <Route
          exact
          path={RoutingPaths.mainView}
          component={blockrouteIfAuthenticated(Main)}
        />
        <Route component={HomeView} />
      </Switch>
    </Router>
  );
};

export default Routing;
