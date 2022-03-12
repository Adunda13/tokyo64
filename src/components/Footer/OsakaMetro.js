import { Button,Modal} from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import {BsFillCaretRightFill} from 'react-icons/bs';

const OsakaMetro = () => {
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" size="sm" onClick={handleShow}>
          Osaka Metro 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Osaka Metro</Modal.Title>
          </Modal.Header>
          <Modal.Body><h5><BsFillCaretRightFill /><a href="https://subway.osakametro.co.jp/">Osaka Metro</a></h5></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
       
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default OsakaMetro;