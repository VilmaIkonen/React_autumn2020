// MODAL NOT USED IN APP

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const SuccessMessageModal = ({}) => {

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    window.location.reload();
  }
  
  const handleShow = () => {
    setShowModal(true);
  }
    
    return (
      <Modal
        show = {showModal}
        onHide = {handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default SuccessMessageModal;