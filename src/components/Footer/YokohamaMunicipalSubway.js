import { Container} from 'react-bootstrap';
import React from 'react';
import YokohamaSubwayLogo from './Yokohama_Municipal_Subway_Logo.png';
const YokohamaMunicipalSubway = () => { 
        return (
      <>
      <Container className="tabBody">
        <a href="https://www.metrolinemap.com/metro/yokohama/">Yokohama Municipial Subway</a>
        <img src={YokohamaSubwayLogo} alt="Yokohama Logo"/>
        </Container>
      </>
    );
  }
  
export default YokohamaMunicipalSubway;