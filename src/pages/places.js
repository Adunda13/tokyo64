import React from 'react';
import {Container,CardGroup,Card } from 'react-bootstrap';

const Places = () => {
    return (
        <div>
	<Container className="containerPadding">

	<h1 className="headerStyle">Places to see</h1>
	<hr className="tsLine" /> 
  <div class="row">
  <CardGroup className="homeCard">
 

<Card className="containerPadding col-lg-2">
  <Card.Img variant="top" src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/skytreeStreetView.JPG'} alt="Skytree" className="img-fluid img-thumbnail" />
  <Card.Body>
    <Card.Title>Tokyo</Card.Title>
    <Card.Text>
     
    </Card.Text>
    <button type="button" className="btn btn-outline-success">Learn more</button>
  </Card.Body>
</Card>
<Card className="containerPadding col-lg-2">
  <Card.Img variant="top" src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/osakaGlico.jpg'} alt="Osaka Minami" className="img-fluid img-thumbnail" />
  <Card.Body>
    <Card.Title>Osaka</Card.Title>
    <Card.Text>
    </Card.Text>
    <button type="button" className="btn btn-outline-success">Learn more</button>

  </Card.Body>

</Card>
<Card className="containerPadding col-lg-2">
  <Card.Img variant="top" src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/kyotoGion.jpg'} alt="Kinkakuji" className="img-fluid img-thumbnail" />
  <Card.Body>
    <Card.Title>Kyoto</Card.Title>
    <Card.Text>
    </Card.Text>
    <button type="button" className="btn btn-outline-success">Learn more</button>
  </Card.Body>

</Card>
<Card className="containerPadding col-lg-2">
  <Card.Img variant="top" src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/niigataStationArea.jpg'} alt="Niigata" className="img-fluid img-thumbnail" />
  <Card.Body>
    <Card.Title>Niigata</Card.Title>
    <Card.Text>
    </Card.Text>
    <button type="button" className="btn btn-outline-success">Learn more</button>
  </Card.Body>

</Card>

</CardGroup></div>








	</Container>
	</div>

    );
}

export default Places;