import { Container } from 'react-bootstrap';
import React from 'react';
import KyotoMunicipalSubwayLogo from 'https://s3.us-west-2.amazonaws.com/tokyo64.com/kyotoSubwayLogo.png';

const KyotoMunicipalSubway = () => {
  return (
    <>
    <Container className="tabBody">
      <a href="https://www.metrolinemap.com/metro/yokohama/">Sapporo Transit </a>
      <img src={KyotoMunicipalSubwayLogo} alt="Sapporo Transit Logo"/>
    </Container>
    </>
  );
  }
  
export default KyotoMunicipalSubway;