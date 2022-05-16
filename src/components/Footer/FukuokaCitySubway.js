import { Container} from 'react-bootstrap';
import React from 'react';
import FukuokaCitySubwayLogo from 'https://s3.console.aws.amazon.com/s3/object/tokyo64.com?region=us-west-2&prefix=fukuokaCitySubway.jpg';

const FukuokaCitySubway = () => {
  
    return (
      <>
      <Container className="tabBody">
        <a href="https://www.metrolinemap.com/metro/fukuoka/">Fukuoka City Subway</a>
        <img src={FukuokaCitySubwayLogo} alt="Fukuoka City Subway Logo"/>
        </Container>
      </>
    );
  
  }
  
export default FukuokaCitySubway;