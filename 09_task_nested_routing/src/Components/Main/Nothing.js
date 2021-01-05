import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"

const Nothing = () => {
  return (
    <Container fluid className="d-flex justify-content" bsPrefix="overlay">
      <Alert variant="success" className="p-4"> 
        <Alert.Heading>There is nothing here, go <Link to="/"> Home</Link> </Alert.Heading>                  
      </Alert>
    </Container>
  );
};

export default Nothing;
