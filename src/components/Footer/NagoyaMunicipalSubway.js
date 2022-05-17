import { Container } from 'react-bootstrap';
import React from 'react';
import NagoyaMunicipalSubwayLogo from 'https://s3.us-west-2.amazonaws.com/tokyo64.com/NagoyaMunicipalSubwayLogo.png';

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