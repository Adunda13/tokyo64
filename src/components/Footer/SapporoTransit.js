import { Container } from 'react-bootstrap';
import React from 'react';
import SapporoTransitLogo from './sapporoTransit.png';

const SapporoTransit = () => {
  return (
    <>
    <Container className="tabBody">
      <a href="https://www.metrolinemap.com/metro/yokohama/">Sapporo Transit </a>
      <img src={SapporoTransitLogo} alt="Sapporo Transit Logo"/>
    </Container>
    </>
  );
  }
  
export default SapporoTransit;