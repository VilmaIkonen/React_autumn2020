import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    // Replace <div> with <Router>
    <Router>
      <div className="container">        
        <Header/> 
        <Main/>     
        <Footer/>
      </div>
    </Router>
  );
};

export default App;