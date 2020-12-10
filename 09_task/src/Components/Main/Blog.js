import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts/").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const PostList = posts.map((p) => {
    return (
      <BlogCard
        key={p.id}
        title={p.title}
        author={p.author}
        desc={p.desc}
        img={p.img}
      />
    );
  });

  return <div>{PostList}</div>;
};

export default Blog;
