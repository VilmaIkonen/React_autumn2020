import React from "react";
import Home from "./Home";
import Posts from "./Posts";
import Nothing from './Nothing';
import NewPost from "./NewPost";
import { Switch, Route } from "react-router-dom"


/* "/" as last one or use "exact", then it goes specifically to home page, otherwise it also matches the start of "/blog and "/new_post" and the links won't work */

const Main = () => {
  return (
    <main id="main">
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" component={Posts} />
      <Route path="/new_post" component={NewPost} />
      <Route component={Nothing} />
    </Switch>
    </main>
  );
};

export default Main;
