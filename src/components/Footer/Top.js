import React from 'react';
import {Container,CardGroup,Card,Tab,Tabs} from 'react-bootstrap';
import shibuyaCrossing from 'https://s3.us-west-2.amazonaws.com/tokyo64.com/shibuyaCrossing.jpg';
import ueno from 'https://s3.us-west-2.amazonaws.com/tokyo64.com/ueno.jpg';
import TokyoMetro from './TokyoMetro.js';
import OsakaMetro from './OsakaMetro.js';
import SapporoTransit from './SapporoTransit.js';
import KyotoMunicipalSubway from './KyotoMunicipalSubway.js';
import FukuokaCitySubway from './FukuokaCitySubway.js';
import NagoyaMunicipalSubway from './NagoyaMunicipalSubway.js';
import SendaiSubway from './SendaiSubway.js';
import ToeiSubway from './ToeiSubway.js';
import YokohamaMunicipalSubway from './YokohamaMunicipalSubway.js';

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
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5XUr55OmPL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </Card.Text>
    </Card.Body>

  </Card>
  <Card className="containerPadding">
    <Card.Img variant="top" src={ueno} alt="Ueno" />
    <Card.Body>
      <Card.Title>Ueno</Card.Title>
      <Card.Text>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-3C7NE5C6Sw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      </Card.Text>
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