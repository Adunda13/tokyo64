import React from 'react';
import {Container, Accordion } from 'react-bootstrap';
import japaneseCuisine from './japaneseCuisine.jpg';
import ramenKerama from './ramenKerama.jpg';



const Culture = () => {
return (
	<div>
	<Container className="containerPadding">
	<h1 className="headerStyle" >Culture!</h1>
	<hr className="tsLine" />
	<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header className="tsAccordionHeader">Japanese cuisine is the best in world!</Accordion.Header>
    <Accordion.Body>
    <p>In Tokyo there are better French restaurants than in Paris. You can get all kinds of good meals in Japan and 
	most restaurants are world class! There are many affordable places to eat too. They have menus for every budget 
	from family restaurants to lunchtime bentos. It is one of the safest places in the world to eat too. In my over 11 years 
	there I never got sick from eating anything.</p>
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
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header className="tsAccordionHeader">Festivals are abundant in Japan.</Accordion.Header>
    <Accordion.Body>
      In Japan every place on the map has festivals. You can spend a lifetime getting to see them. I saw the obon 
	  festivals in Okinawa and Mie Prefectures. I was also at a festival called the Yamanoshita Matsuri in Niigata. 
	  I'm looking forward to going to many more. The food and drink are good and plentiful and the people are very friendly.
	  I remember being at the Yamanoshita festival walking around and being handed free beer. It was awesome!
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
	</Container>
	</div>
);
};

export default Culture;
