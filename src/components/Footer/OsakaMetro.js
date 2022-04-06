import { Container} from 'react-bootstrap';
import React from 'react';
import OsakaMetroLogo from './osakaMetroLogo.png';

const OsakaMetro = () => {   
    return (
      <>
      <Container className="tabBody">
        <a href="https://www.metrolinemap.com/metro/osaka/">Osaka Municipal Subway</a>
        <img src={OsakaMetroLogo} alt="Osaka Municipal Logo"/>
      </Container>
      </>
    ); 
  }
  
export default OsakaMetro;