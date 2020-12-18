import React from "react";
import { Jumbotron, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Jumbotron className="mb-0 d-flex justify-content-center  text-center">  
      <div className="jumbotron-container">
        <h1>Welcome to greetings board!</h1>
        <h2>Send your loved ones Season Greetings </h2>
        <p><strong>and share the joy with others too</strong> 
        </p>
        <p>
        <Button className="px-3 py-2" variant="primary" href="/new_post">Let's make someone happy</Button>
        </p>  
      </div>  
    </Jumbotron>
  );
};

export default Home;
