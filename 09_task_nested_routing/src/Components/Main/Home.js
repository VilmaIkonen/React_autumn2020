import React from "react";
import { Link } from 'react-router-dom'
import { Jumbotron, Button, Nav } from 'react-bootstrap';

const Home = () => {
  return (
    <Jumbotron className="jumbotron">  
      <h2>Send your loved ones Season Greetings! </h2>
      <h1>Welcome to greetings.com!</h1>
      <p><strong>and share the joy with others too</strong> 
      </p>
      <p>
      <Button variant="primary" className="button">		
        <Link to="/new_post">Let's make someone happy</Link> 
      </Button>
      </p>    
    </Jumbotron>
  );
};

export default Home;
