import { Container } from 'react-bootstrap';
import React from 'react';

const SendaiSubway = () => {
  return (
    <>
    <Container className="tabBody">
      <a href="https://www.kotsu.city.sendai.jp/images/sbway/route_map.pdf"> Sendai City Subway </a>
      <img src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/SendaiCitySubwayLogo.png'} alt="Sendai City Subway Logo"/>
    </Container>
    </>
  );
  }
  
export default SendaiSubway