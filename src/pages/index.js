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

 
      
</Container>
</div>
);
};

export default Home;