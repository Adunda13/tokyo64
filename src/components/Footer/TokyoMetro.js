import { Container } from 'react-bootstrap';
import React from 'react';
import TokyoMetroLogo from './Tokyo_Metro_logo.png';

const TokyoMetro = () => {

  
    return (
      <>
      <Container className="tabBody">
        <a href="https://www.metrolinemap.com/metro/tokyo/">Tokyo Metro</a>
        <img src={TokyoMetroLogo} alt="Tokyo Metro Combined Logo"/>
        </Container>
      </>
    );
  }
  
export default TokyoMetro;