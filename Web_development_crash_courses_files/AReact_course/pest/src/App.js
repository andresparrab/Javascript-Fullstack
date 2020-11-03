import userEvent from "@testing-library/user-event";
import React from "react";
import { BroserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  if ((userEvent.title = "manager")) {
  }

  return (
    <Router>
      <Switch>
        <Route>
          exact path={"/home"} component={TBA}
        </Route>
        <Route component={TBA}></Route>
      </Switch>
    </Router>
  );
};
