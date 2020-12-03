//Defactored App.js

import React, { useState } from 'react';
import './App.css';
import Form from './Form/Form';
import View from './View/View';
import Popup from './Popup/Popup';
import Notes from  './Notes/Notes';
import axios from 'axios';

const App = () => {

  // For note
  const [ note, setNotes ] = useState({
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
  const submitHandlerNotes = () => {
    axios.post("http://localhost:3001/notes", note);
    window.location.reload();
   };
  // const [ toDb, setToDb ] = useState (false);

  // const submitHandlerNotes = () => {
  //   setToDb(true);
  // };

  // For form, spread! prevent not to overwrite the previous note input
  const changeHandler = (event) => {
    setNotes({
      ...note, 
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
    <Form onChange={changeHandler} submit={submitHandlerPopUp} />
    <View
      firstname={note.firstname}
      lastname={note.lastname}
      phonenumber={note.phonenumber}
      message={note.message}
      role={note.role}
    />
    {/* {toDb && ( */}
      <Notes      
        firstname={note.firstname}
        lastname={note.lastname}
        phonenumber={note.phonenumber}
        message={note.message}
        role={note.role}
    />
    {/* )} */}
    {showPopUp && (
      <Popup 
        submit={submitHandlerNotes}
        firstname={note.firstname}
        lastname={note.lastname}
        phonenumber={note.phonenumber}
        message={note.message}
        role={note.role}
      />
    )}
  </>
  );
};

export default App;



