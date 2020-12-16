import React from 'react';
import { Alert } from 'react-bootstrap'

const Nothing = () => {
  return (
  <Alert variant="primary">
    There is nothing here, go
    <Alert.Link href="/"> Home</Alert.Link>
  </Alert>
  );
};

export default Nothing;
