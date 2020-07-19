import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Software from './containers/software';
import Home from './containers/home';
import NotFound from './containers/404';
import Physics from './containers/physics';
import Contact from './containers/contact';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/software" exact component={Software} />
    <Route path="/physics" exact component={Physics} />
    <Route path="/contact" exact component={Contact} />
    <Route component={NotFound} />
  </Switch>
);
