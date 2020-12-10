import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import SinglePost from './SinglePost'
import { useRouteMatch, Route, Switch } from 'react-router-dom'

const Blog = () => {
  const [posts, setPosts] = useState([]);

  let {path, url} = useRouteMatch();

  useEffect(() => {
    axios.get("http://localhost:3001/posts/").then((response) => {
      setPosts(response.data);
    });
  }, []);
  
  // Map BlogCard component
  const PostList = posts.map((p) => {
    return (
      <BlogCard
        key={p.id}
        title={p.title}
        author={p.author}
        desc={p.desc}
        img={p.img}
        link={`${url}/${p.id}`}
      />
    );
  });

  // :postID (this could be whatever...) defines for useParams what to look for
  return (
    <>
      <Switch>
        <Route path={`${path}/:postID`}>
          <SinglePost/>
        </Route>
        <Route path={path}>
          {PostList}
        </Route>
      </Switch>
    </>
  );
};

export default Blog;
