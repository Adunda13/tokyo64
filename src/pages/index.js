import React from 'react';
import {Container } from 'react-bootstrap';
import akihabaraNight from './akihabaraNight.jpg';


const Home = () => {
return (
	<div>
	<Container className="containerPadding">
        <h1 className="headerStyle">We are Tokyo 64!</h1>
		<hr className="tsLine" />
        <p>All things Japan! We are creating a great website to get you all the information you need on Japan, from visiting to immigrating and more.</p>

        <div class="card-group">
  <div class="card">
      <img src={akihabaraNight} className="card-img-top" alt="Shinjuku night"></img>
    <div class="card-body">
      <h5 class="card-title">Akihabara</h5>
      <p class="card-text">Tokyo's electric town!</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
  <img src={akihabaraNight} className="card-img-top" alt="Shinjuku night"></img>
    <div class="card-body">
      <h5 class="card-title">Akihabara</h5>
      <p class="card-text">There are more than just electronics.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
  <img src={akihabaraNight} className="card-img-top" alt="Shinjuku night"></img>
    <div class="card-body">
      <h5 class="card-title">Akihabara</h5>
      <p class="card-text">Lots of good places to eat.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
  


    
      </Container>
	</div>
);
};

export default Home;
