import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import SinglePost from './SinglePost'
import { useRouteMatch, Route, Switch } from 'react-router-dom'
import { Accordion, Card } from "react-bootstrap";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  let { path, url } = useRouteMatch();

  useEffect(() => {
    axios.get("http://localhost:3001/posts")
    .then((response) => {
      setPosts(response.data);
    });
  }, []);
  
  // Map BlogCard component
  const PostList = posts.map((p) => {
    return (
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {p.id} {p.title} {p.author}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <BlogCard
                title = {p.title} 
                author = {p.author}
                img = {p.img}
                link = {`${url}/${p.id}`}
              />            
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
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

export default Blog;
