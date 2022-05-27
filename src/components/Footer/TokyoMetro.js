import { Container } from 'react-bootstrap';
import React from 'react';

const TokyoMetro = () => {

  
    return (
      <>
      <Container className="tabBody">
        <a href="https://www.metrolinemap.com/metro/tokyo/">Tokyo Metro</a>
        <img src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/Tokyo_Metro_logo.png'} alt="Tokyo Metro Combined Logo"/>
        </Container>
      </>
    );
  }
  
export default TokyoMetro;