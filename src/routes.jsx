import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Software from './containers/software';
import Home from './containers/home';
import NotFound from './containers/404';
import Physics from './containers/physics';
import Contact from './containers/contact';
import Blog from './containers/blog';
import BlogPost from './components/blogPost';
import { withFirebase } from './components/Firebase';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/software" exact component={Software} />
    <Route path="/physics" exact component={Physics} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/blog" exact component={withFirebase(Blog)} />
    <Route path="/blog/:slug" component={withFirebase(BlogPost)} />
    <Route component={NotFound} />
  </Switch>
);
