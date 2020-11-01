import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "../shared/global/provider/UserProvider";
import RoutingPaths from "./RouthingPaths";
import { RecipeView } from "../view/RecipeView";
import { HomeView } from "../view/HomeView";
import { SignInView } from "../view/SignInView";
import { SettingsView } from "../view/SettingsView";
import { ProfileView } from "../view/ProfileView";

export const Routing = (props) => {
  const [authenticatedUser2, setauthenticatedUser2] = useContext(UserContext);

  // const CheckIsUserAuthenticated = () => {
  //   setauthenticatedUser2(localStorage.getItem("username"));
  // };
  setauthenticatedUser2(localStorage.getItem("username"));

  console.log("The user is before check : ", authenticatedUser2);
  const CheckIsUserAuthenticated = () => {
    return authenticatedUser2 === "andres"
      ? authenticatedUser2
      : setauthenticatedUser2(undefined);
  };
  console.log("The user is after check : ", authenticatedUser2);

  const blockrouteIfAuthenticated = (navigateView) => {
    return authenticatedUser2 ? HomeView : navigateView;
  };

  const blockrouteIfNotAuthenticated = (navigateView) => {
    return !authenticatedUser2 ? SignInView : navigateView;
  };

  useEffect(() => {
    CheckIsUserAuthenticated();
    // return () => {
    //   cleanup;
    // };
  }, []); //[input]);

  //take  argument..we call this variable props from the App.js
  return (
    <Router>
      {/*in this case the props children are the sub elements from App.js <Routing></Routing>*/}
      {props.children}

      <Switch>
        <Route
          exact
          path={RoutingPaths.recipeView}
          component={blockrouteIfNotAuthenticated(RecipeView)}
        />
        <Route
          exact
          path={RoutingPaths.signInView}
          component={blockrouteIfAuthenticated(SignInView)}
        />
        <Route
          exact
          path={RoutingPaths.settingsView}
          component={blockrouteIfNotAuthenticated(SettingsView)}
        />
        <Route
          exact
          path={RoutingPaths.profileView}
          component={blockrouteIfNotAuthenticated(ProfileView)}
        />
        <Route component={HomeView} />
      </Switch>
    </Router>
  );
};
