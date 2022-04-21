import { Container } from 'react-bootstrap';
import React from 'react';
import SendaiCitySubwayLogo from './SendaiCitySubwayLogo.png';

const SendaiSubway = () => {
  return (
    <>
    <Container className="tabBody">
      <a href="https://www.kotsu.city.sendai.jp/images/sbway/route_map.pdf"> Sendai City Subway </a>
      <img src={SendaiCitySubwayLogo} alt="Sendai City Subway Logo"/>
    </Container>
    </>
  );
  }
  
export default SendaiSubway;