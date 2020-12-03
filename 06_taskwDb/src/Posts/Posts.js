import React, { useState, useEffect } from 'react';
import axios from 'axios'

const API = "http://localhost:3001/notes"

const Posts = (
  // { firstname, lastname, phonenumber, message, role }
  ) => {

  const [ posts, setPosts ] = useState([]);

useEffect(() => {
  axios
  .get(API)
  .then(res => {
    setPosts(res.data);
  })
}, []);

  return (
    <div>
    <ul>
      {posts.map(post => 
        <li>
         { post.firstname }
         { post.lastname }
         { post.phonenumber }
         { post.message }
         { post.role }
        </li>
      )}
    </ul>
      {/* <form onSubmit={submit}>
        <p>First name: <span>{firstname}</span></p>
        <p>Last name: <span>{lastname}</span></p>
        <p>Phonenumber: <span>{phonenumber}</span></p>
        <p>Message: <span>{message}</span></p>
        <p>Role: <span>{role}</span></p> 
      </form>     */}
    </div>
  );
};

export default Posts;