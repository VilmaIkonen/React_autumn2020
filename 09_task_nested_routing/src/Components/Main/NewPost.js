import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from 'react-bootstrap';

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
    });
  };

  const [ successMessage, setSuccessMessage ] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setSuccessMessage(true);
  }

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
            placeholder="Post title" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Author</Form.Label>
          <Form.Control 
            type="text"
            name="author"
            id="author"
            onChange={changeValueHandler}
            placeholder="Your name goes here" />
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
            placeholder="Write your post here"/>
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
          onClick={handleSubmit}
          type="submit" variant="outline-primary">Submit new post</Button>
        </Form>
        {successMessage && <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Congrats!</strong> Your details have been submitted successfully
              <button type="button" class="close" data-dismiss="alert" aria-label="Close" 
              onClick={()=>{setSuccessMessage(false)}}>
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
     }
   
    </>          
  );
};

export default NewPost;


