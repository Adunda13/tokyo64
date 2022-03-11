import React from 'react';
import {Container,CardGroup,Card} from 'react-bootstrap';
import shibuyaCrossing from './shibuyaCrossing.jpg';
import starbucksShibuya from './starbucksShibuya.jpg';
import nakamiseDori from './nakamiseDori.jpg';


const Top =() => {
    return (
        <>
        <div class="topFooterBorder"></div>
        <div class="topFooter">
        <Container className="containerPadding">        
        <h2>Other places to see</h2>
        <CardGroup className="topCard">
  <Card className="containerPadding">
    <Card.Img variant="top" src={shibuyaCrossing} alt="Shibuya Crossing"/>
    <Card.Body>
      <Card.Title>Shibuya Crossing</Card.Title>
      <Card.Text>
        Shibuya crossing is the busiest crosswalk in the world! You can just stand there and watch them go!
      </Card.Text>
    </Card.Body>

  </Card>
  <Card className="containerPadding">
    <Card.Img variant="top" src={starbucksShibuya} alt="Starbucks Shibuya" />
    <Card.Body>
      <Card.Title>Shibuya Starbucks</Card.Title>
      <Card.Text>
       Shibuya Starbucks is one of the busiest in the world!
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card className="containerPadding">
    <Card.Img variant="top" src={nakamiseDori} alt="Nakamise Dori" />
    <Card.Body>
      <Card.Title>Nakamise Dori</Card.Title>
      <Card.Text>
      Nakamisedori in Tokyo's Asakusa.
      </Card.Text>
    </Card.Body>

  </Card>
</CardGroup>

        <p className="tsCopy">Copyright&#169;Tokyo '64 All rights reserved.</p>
  


        </Container>
        </div>
        </>
    );
};

export default Top;