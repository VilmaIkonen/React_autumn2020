import React from "react";
import { Alert, Button, Container } from 'react-bootstrap';

const SuccessMessage = () => {

 const closeHandler = () => {
   window.location.reload();
 }
    
  return (
    <Container className="d-flex justify-content">
      <Alert variant="success" > 
        <Button className="d-flex justify-content" onClick={closeHandler} variant="outline-success"> X </Button>
      <Alert.Heading>Success!</Alert.Heading>
      <p>Your post has been added to the Notes board.</p>
      </Alert>
    </Container>
  );
};

export default SuccessMessage;