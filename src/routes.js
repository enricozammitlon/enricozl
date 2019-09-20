import React from "react";
import { Route, Switch } from "react-router-dom";
import Software from "./containers/software";
import Home from "./containers/home";
import NotFound from "./containers/404";
import Physics from "./containers/physics";

import AppliedRoute from "./components/AppliedRoute";

export default ({ childProps }) =>
  <Switch>
	<AppliedRoute path="/" exact component={Home} props={childProps} />
	<AppliedRoute path="/software" exact component={Software} props={childProps} />
	<AppliedRoute path="/physics" exact component={Physics} props={childProps} />
	<Route component={NotFound} />
  </Switch>