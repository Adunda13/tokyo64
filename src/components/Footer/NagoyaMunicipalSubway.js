import { Container } from 'react-bootstrap';
import React from 'react';
import NagoyaMunicipalSubwayLogo from './NagoyaMunicipalSubwayLogo.png';

const NagoyaMunicipalSubway = () => { 
  return (
    <>
    <Container className="tabBody">
      <a href="https://www.metrolinemap.com/metro/yokohama/"> Nagoya Municipal Subway </a>
      <img src={NagoyaMunicipalSubwayLogo} alt="Nagoya Municipal Subway Logo"/>
    </Container>
    </>
  );
  }
  
export default NagoyaMunicipalSubway;