import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import SinglePost from './SinglePost'
import { useRouteMatch, Route, Switch } from 'react-router-dom'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  let { path, url } = useRouteMatch();

  useEffect(() => {
    axios.get("http://localhost:3001/posts")
    .then((response) => {
      setPosts(response.data);
    });
  }, []);
  
  // Map PostCard component
  const PostList = posts.map((post) => {
    return (
      <PostCard 
        key = {post.id}
        title = {post.title}
        author = {post.author}
        img = {post.img}
        link = {`${url}/${post.id}`}
        desc = {post.desc}
      />
    );
  });

  // :id (this could be whatever...) defines for useParams what to look for
  return (
    <>
      <Switch>
        <Route path = {`${path}/:id`}>
          <SinglePost/>
        </Route>
        <Route path = {path}>{PostList}</Route>
      </Switch>
    </>
  );
};

export default Posts;
