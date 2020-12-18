import React from "react";
import { Jumbotron, Button, Nav } from 'react-bootstrap';

const Home = () => {
  return (
    <Jumbotron className="homePage">
      <h2>Send your loved ones Season Greetings! </h2>
      <h1>Welcome to greetings.com!</h1>
      <p><strong>and share the joy with others too</strong> 
      </p>
      <p>
      <Button variant="primary">		
        <Nav>
			    <Nav.Item as="li">
				    <Nav.Link href="/new_post" eventkey="home">Let's make someone happy</Nav.Link>
			    </Nav.Item>
		    </Nav> 
      </Button>
      </p>
    </Jumbotron>
  );
};

export default Home;
