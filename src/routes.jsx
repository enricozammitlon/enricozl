import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Software from './containers/software';
import Home from './containers/home';
import NotFound from './containers/404';
import Physics from './containers/physics';
import Contact from './containers/contact';
import Blog from './containers/blog';
import BlogPost from './components/blogPost';
import { withFirebase } from './components/Firebase';

export default () => (
  <Routes>
    <Route path="/" exact element={<Home />} />
    <Route path="/software" exact element={<Software />} />
    <Route path="/physics" exact element={<Physics />} />
    <Route path="/contact" exact element={<Contact />} />
    <Route path="/blog" exact element={withFirebase(<Blog />)} />
    <Route path="/blog/:slug" element={withFirebase(<BlogPost />)} />
    <Route element={<NotFound />} />
  </Routes>
);
