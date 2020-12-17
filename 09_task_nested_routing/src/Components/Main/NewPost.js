import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from 'react-bootstrap';
import SuccessMessage from './SuccessMessage'

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    desc: "",
    img: ""
  });

  const changeValueHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const addPostHandler = (event) => {
    event.preventDefault();

    axios.post("http://localhost:3001/posts", newPost).then((response) => {
      console.log(response.data);
      window.location.reload();
    });
  };

  // const [ successMessage, setSuccessMessage ] = useState(false);

  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   setSuccessMessage(true);
  // }

  return (
    <>
      <h1>Add new post</h1>
      <Form className="newPost" onSubmit={addPostHandler}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text"
            name="title"
            id="title"
            onChange={changeValueHandler} 
            placeholder="Post title"
            maxLength={30} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Author</Form.Label>
          <Form.Control 
            type="text"
            name="author"
            id="author"
            onChange={changeValueHandler}
            placeholder="Your name goes here"
            maxLength={10} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            as="textarea" 
            type="text"
            name="desc"
            id="desc"
            onChange={changeValueHandler}
            rows={5} 
            placeholder="Write your post here"
            maxLength={400}
            />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Image URL</Form.Label>
          <Form.Control 
            type="text"
            name="img"
            id="img"
            onChange={changeValueHandler}
            placeholder="https://..." />
        </Form.Group>
        <Button
          // onClick={handleSubmit}
          type="submit" variant="outline-primary">Submit new post       
        </Button>
        {/* {successMessage && <SuccessMessage />}        */}
      </Form>
    </>          
  );
};

export default NewPost;


