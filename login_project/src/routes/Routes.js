import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginContainer from "../Containers/LoginContainer";
import DashboardContainer from "../Containers/DashboardContainer";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginContainer />
        </Route>
        <Route path="/dashboard">
          <DashboardContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;