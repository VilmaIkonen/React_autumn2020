import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    // Replace <div> with <Router>
    <Router>
      <Header/> 
      <Main/> 
    </Router>
  );
};

export default App;