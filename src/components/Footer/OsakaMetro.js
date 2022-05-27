import { Container} from 'react-bootstrap';
import React from 'react';

const OsakaMetro = () => {   
    return (
      <>
      <Container className="tabBody">
        <a href="https://www.osakametro.co.jp/en/index.php">Osaka Municipal Subway</a>
        <img src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/osakaMetroLogo.png'} alt="Osaka Municipal Logo"/>
      </Container>
      </>
    ); 
  }
  
export default OsakaMetro;