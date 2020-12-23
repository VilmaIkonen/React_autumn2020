import React from "react";
import { Alert, Button, Container } from 'react-bootstrap';

const SuccessMessage = () => {

 const closeHandler = () => {
   window.location.reload();
 }
    
  return (
    <Container fluid className="d-flex justify-content" bsPrefix="overlay">
      <Alert variant="success" > 
        <Alert.Heading>Success!</Alert.Heading>
        <p>Your post has been added to the Notes board.</p>
        <Button className="closeBtn" onClick={closeHandler} variant="outline-success"> Close </Button>     
      </Alert>
    </Container>
  );
};

export default SuccessMessage;