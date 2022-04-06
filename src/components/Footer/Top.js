import React from 'react';
import {Container,CardGroup,Card,Tab,Tabs} from 'react-bootstrap';
import shibuyaCrossing from './shibuyaCrossing.jpg';
import ueno from './ueno.jpg';
import skyTree from './skyTree.jpg';
import TokyoMetro from './TokyoMetro.js';
import OsakaMetro from './OsakaMetro.js';
import SapporoTransit from './SapporoTransit.js';
import KyotoMunicipalSubway from './KyotoMunicipalSubway';
import FukuokaCitySubway from './FukuokaCitySubway';
import NagoyaMunicipalSubway from './NagoyaMunicipalSubway';
import SendaiSubway from './SendaiSubway';
import ToeiSubway from './ToeiSubway';
import YokohamaMunicipalSubway from './YokohamaMunicipalSubway';





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
		<hr className="tsLine" />

<Container className="footerText">
<h4>Local Subway Lines</h4><br></br>

<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="tabFooter">
  <Tab eventKey="tokyoMetro" title="Tokyo Metro">
  <TokyoMetro />
  </Tab>
  <Tab eventKey="toeiSubway" title="Toei Subway">
  <ToeiSubway />
  </Tab>
  <Tab eventKey="yokohamaMunicipalSubway" title="Yokohama Municipal Subway">
  <YokohamaMunicipalSubway />
  </Tab>
  <Tab eventKey="osakaMetro" title="Osaka Metro">
  <OsakaMetro />
  </Tab>
  <Tab eventKey="sapporoTransit" title="Sapporo Transit">
  <SapporoTransit />
  </Tab>
  <Tab eventKey="kyotoMunicipalSubway" title="Kyoto Municipal Subway">
  <KyotoMunicipalSubway/>
  </Tab>
  <Tab eventKey="fukuokaCitySubway" title="Fukuoka City Subway">
  <FukuokaCitySubway />
  </Tab>
  <Tab eventKey="nagoyaMunicipalSubway" title="Nagoya Municipal Subway">
  <NagoyaMunicipalSubway />
  </Tab>
  <Tab eventKey="sendaiSubway" title="Sendai Subway">
  <SendaiSubway />
  </Tab>
</Tabs>
   

</Container>
		<hr className="tsLine" />


        <p className="tsCopy">Copyright &copy; 2022 Tokyo '64 All Rights Reserved.</p>
  


        </Container>
        </div>
        </>
    );
};

export default Top;