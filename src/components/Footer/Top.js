import React from 'react';
import {Container,CardGroup,Card, Row, Col} from 'react-bootstrap';
import shibuyaCrossing from './shibuyaCrossing.jpg';
import ueno from './ueno.jpg';
import skyTree from './skyTree.jpg';


const Top =() => {
    return (
        <>
        <div class="topFooterBorder"></div>
        <div class="topFooter">
        <Container fluid className="containerPadding">        
        <h4>Other places to see</h4>
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
    <Card.Img variant="top" src={ueno} alt="Ueno" />
    <Card.Body>
      <Card.Title>Ueno</Card.Title>
      <Card.Text>
       Ueno has a lot to see with the park, the zoo, and the museums along with Ameyokocho's bargain shops and eateries.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card className="containerPadding">
    <Card.Img variant="top" src={skyTree} alt="Tokyo Skytree" />
    <Card.Body>
      <Card.Title>Tokyo Skytree</Card.Title>
      <Card.Text>
      The view from here is stunning! It can be seen from all over the metropolis.
      </Card.Text>
    </Card.Body>

  </Card>
</CardGroup>
<Row>
    <Col><h5>National and Local Transportation Systems</h5></Col>
    <Col><h5>Popular Places to visit</h5></Col>
    <Col><h5>Recommended News Sources</h5></Col>
</Row>

        <p className="tsCopy">Copyright &copy; 2022 Tokyo '64 All Rights Reserved.</p>
  


        </Container>
        </div>
        </>
    );
};

export default Top;