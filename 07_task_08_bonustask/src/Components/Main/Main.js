import React from "react";
import Posts from '../Posts/Posts'
import Blog from '../Posts/Blog'
import Animals from '../Animals/Animals'

const Main = () => {
  return (
    <main>
      <Animals/>
      <Blog/>
      <Posts/>
    </main>
  );  
};

export default Main;
