import React from 'react';
import {Container,CardGroup,Button,Card,Row } from 'react-bootstrap';

const Home = () => {
return (
<div>

<section className="topHome">
<Row>

<div className="col-lg-7 topHomeLeft">
<img  src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/shibuyaCrossing.jpg'}  alt="Shibuya Crossing" />
</div>
<div className="col-lg-5 topHomeRight">
  <h1>We know Japan!</h1>
  <p>We've been into Japan for a long time. The creator of this website lived in Japan for over 11 years! And has been to almost 20 prefectures.</p>
  <Button href="/about" type="button">Learn more</Button>
</div>
</Row></section>
	<Container fluid className="containerPadding">
        <h1 className="headerStyle">We are Tokyo '64!</h1>
		<hr className="tsLine" />
        <p>All things Japan! We are creating a great website to get you all the information you need on Japan, from visiting to immigrating and more.</p>

  <CardGroup className="homeCard">

  <Card className="containerPadding">
    <Card.Img variant="top" src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/harajukuStreet.jpg'} alt="Starbucks Shibuya" />
    <Card.Body>
      <Card.Title>Harajuku Street</Card.Title>
      <Card.Text>
       A great place to hang out in Tokyo.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="containerPadding">
    <Card.Img variant="top" src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/nakamiseDori.jpg'} alt="Nakamise Dori" />
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