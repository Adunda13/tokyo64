import React from 'react';
import {Container } from 'react-bootstrap';
import japaneseCuisine from './japaneseCuisine.jpg';
import ramenKerama from './ramenKerama.jpg';
import tokyoTowerSky from './tokyoTowerSky.jpg';

const Home = () => {
return (
	<div>
	<Container className="containerPadding">
        <h1 className="headerStyle">We are Tokyo 64!</h1>
		<hr className="tsLine" />
       <img src={tokyoTowerSky} alt="Shinjuku night"></img>


        <p>All things Japan! We are creating a great website to get you all the information you need on Japan, from visiting to immigrating and more.</p>
      <div class="row">
      <div class="col">
	  <figure>
      <img className=" tsImageBox" src={japaneseCuisine} alt="tasty" />
	  <figcaption class="figure-caption">A typical ceremonial home prepared meal.</figcaption>
	  </figure>
    </div>
    <div class="col">
	<figure>
    <img className="tsImageBox" src={ramenKerama} alt="tasty" />
	<figcaption class="figure-caption">Delicious ramen in Tokyo.</figcaption>

	</figure>
    </div>
    </div>
      </Container>
	</div>
);
};

export default Home;
