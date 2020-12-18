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

  const changeValueHandler = (event) => {
    setNewPost({
      ...newPost,
      [event.target.name]: event.target.value,
    });
  };

  const [ successMessage, setSuccessMessage ] = useState(false);

  const addPostShowSucceess = (event) => {
    event.preventDefault();

    // show success alert
    setSuccessMessage(true);

    // add new post to db
    axios.post("http://localhost:3001/posts", newPost).then((response) => {
      console.log(response.data);      
    });  
  };


  return (
    <>
      <h1>Add new post</h1>
      <Form className="newPost" onSubmit={addPostShowSucceess} >
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
          variant="outline-primary"
          type="submit" >Submit new post       
        </Button>
        {successMessage && <SuccessMessage />}       
      </Form>
    </>          
  );
};

export default NewPost;


