import { Container } from 'react-bootstrap';
import React from 'react';
import ToeiSubwayLogo from './ToeiSubwayLogo.png';


const ToeiSubway = () => {
   
    return (
      <>
        <Container className="tabBody">

         <a href="https://www.kotsu.metro.tokyo.jp/">Toei Subway</a>
         <img src={ToeiSubwayLogo} alt="Tokyo Metro Combined Logo"/>

         </Container>
      </>
    );
  }
  
export default ToeiSubway;