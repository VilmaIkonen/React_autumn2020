import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Notes.css'

const API = "http://localhost:3001/notes"

const Notes = (
  // { firstname, lastname, phonenumber, message, role }
  ) => {

  const [ notes, setNotes ] = useState([]);

useEffect(() => {
  axios
  .get(API)
  .then(res => {
    setNotes(res.data);
  })
}, []);

  return (
    <div className="hideNotes">
    <ul>
      {notes.map(note => 
        <li>
         { note.firstname }
         { note.lastname }
         { note.phonenumber }
         { note.message }
         { note.role }
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

export default Notes;