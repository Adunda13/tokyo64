import { Container } from 'react-bootstrap';
import React from 'react';
import SendaiCitySubwayLogo from './SendaiCitySubwayLogo.png';

const SendaiSubway = () => {
  return (
    <>
    <Container className="tabBody">
      <a href="https://www.metrolinemap.com/metro/yokohama/"> Nagoya Municipal Subway </a>
      <img src={SendaiCitySubwayLogo} alt="Sendai City Subway Logo"/>
    </Container>
    </>
  );
  }
  
export default SendaiSubway;