//Defactored App.js

import React, { useState } from 'react';
import './App.css';
import Form from './Form/Form';
import View from './View/View';
import Popup from './Popup/Popup';
import Posts from  './Posts/Posts';
import axios from 'axios';

const App = () => {

  // For post
  const [ post, setPost ] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
  });

  // For popup
  const [ showPopUp, setShowPopUp ] = useState (false);

  const submitHandlerPopUp = (event) => {
    setShowPopUp(true);
    event.preventDefault();
  };

  // For database/NotesList
  const submitHandlerDb = () => {
    axios.post("http://localhost:3001/notes/", post);
    window.location.reload();
   };
  // const [ toDb, setToDb ] = useState (false);

  // const submitHandlerDb = (event) => {
  //   setToDb(true);
  //   event.preventDefault();
  // };

  // For form
  const changeHandler = (event) => {
    setPost({
      ...post, // spread! prevent not to overwrite the previous note input
      [event.target.name]: event.target.value,
    });
  };


  return (
    <>
    <Form onChange={changeHandler} submit={submitHandlerPopUp} />
    <View
      firstname={post.firstname}
      lastname={post.lastname}
      phonenumber={post.phonenumber}
      message={post.message}
      role={post.role}
    />
    {/* {toDb && ( */}
      <Posts       
        firstname={post.firstname}
        lastname={post.lastname}
        phonenumber={post.phonenumber}
        message={post.message}
        role={post.role}
    />
    {/* )} */}
    {showPopUp && (
      <Popup 
        submit={submitHandlerDb}
        firstname={post.firstname}
        lastname={post.lastname}
        phonenumber={post.phonenumber}
        message={post.message}
        role={post.role}
      />
    )}
  </>
  );
};

export default App;



