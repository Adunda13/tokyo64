import { Button,Modal} from 'react-bootstrap';
import React from 'react';
import { useState } from 'react';
import {BsFillCaretRightFill} from 'react-icons/bs';

const SapporoTransit = () => {
    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" size="sm" onClick={handleShow}>
          Sapporo Transit 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sapporo Transit</Modal.Title>
          </Modal.Header>
          <Modal.Body><h5><BsFillCaretRightFill /><a href="https://www.city.sapporo.jp/st/foreign/index.html">Sapporo Transit</a></h5></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
       
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default SapporoTransit;