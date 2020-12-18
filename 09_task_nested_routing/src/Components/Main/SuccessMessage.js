import React from "react";
import { Alert, Button } from 'react-bootstrap';

const SuccessMessage = () => {

 const closeHandler = () => {
   window.location.reload();
 }
    
  return (
    <Alert variant="success">
    <Alert.Heading>Success!</Alert.Heading>
    <p>Your post has been added to the Blog.</p>
    <hr />
    <div className="d-flex justify-content-end">
      <Button onClick={closeHandler} variant="outline-success">
        X
      </Button>
    </div>
  </Alert>
  );
};

export default SuccessMessage;