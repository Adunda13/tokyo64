import React from 'react';
import {Container,Figure,CardGroup,Card } from 'react-bootstrap';
import harajukuStreet from './harajukuStreet.jpg';
import nakamiseDori from './nakamiseDori.jpg';
import starbucksShibuya from './starbucksShibuya.jpg';

const Home = () => {
return (
<div>

<Figure>
  <Figure.Image  
    alt="Shinjuku"
    src={starbucksShibuya}
  />
 
</Figure>
	<Container fluid className="containerPadding">
        <h1 className="headerStyle">We are Tokyo '64!</h1>
		<hr className="tsLine" />
        <p>All things Japan! We are creating a great website to get you all the information you need on Japan, from visiting to immigrating and more.</p>

  <CardGroup className="homeCard">

  <Card className="containerPadding">
    <Card.Img variant="top" src={harajukuStreet} alt="Starbucks Shibuya" />
    <Card.Body>
      <Card.Title>Harajuku Street</Card.Title>
      <Card.Text>
       A great place to hang out in Tokyo.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="containerPadding">
    <Card.Img variant="top" src={nakamiseDori} alt="Nakamise Dori" />
    <Card.Body>
      <Card.Title>Nakamisedori</Card.Title>
      <Card.Text>
       Nakamisedori in Tokyo's Asakusa.
      </Card.Text>
    </Card.Body>

  </Card>
</CardGroup>
      
</Container>
</div>
);
};

export default Home;
