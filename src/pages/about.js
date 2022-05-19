import React from 'react';
import {Container } from 'react-bootstrap';

const About = () => {
return (
	
<div>
<Container className="containerPadding">


  <h1 className="headerStyle">About Us!</h1>  
  <hr className="tsLine" />

  <div className="container">
  <div className="row">
    <div className="col">
    <img src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/meInYokohama.jpg'} className="rounded thumbnailShot" alt="me in Yokohama"/>

    </div>
    <div className="col-7">
      <p className="pushDown">I have been interested in Japan since I was a little boy watching the hit show Ultraman. Before going to Japan I read many books and watched many programs on Japan.
  My first place I stepped into was Okinawa, where I spent 7 years there in the U.S. Air Force. Upon separating from the Air Force, I never got rid of my taste for Japan. A few years later I was back there teaching English 
  to make a living. I lived in a small town in Mie Prefecture called <a href="https://en.wikipedia.org/wiki/Matsusaka">Matsusaka.</a> </p>
    </div>
    
  </div>
  <br/>
  <div className="row">
  	<div className="col-7">
      <p className="pushDown">I lived and worked in Matsusaka for a year before moving to  <a href="https://en.wikipedia.org/wiki/Osaka">Osaka.</a> It was a wonderful place to live with everything under the sun. I got 
	  to know the layout really well and I still miss it today. I try to get back to Osaka as much as I can. </p>
    </div>
    <div className="col">
    <img src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/osakaGlico.jpg'} className="rounded thumbnailShot" alt="Osaka minami"/>
    </div>
    
    
  </div>
  <div className="row">
  <div className="col">
    <img src={'https://s3.us-west-2.amazonaws.com/tokyo64.com/teachNova.jpg'} className="rounded thumbnailShot" alt="Teach at Nova"/>
    </div>
  	<div className="col-7">
      <p className="pushDown">I taught at Nova when I lived in Osaka. Nova at the time was the largest private language school in Japan. 
	  I remember sitting in the main office filling out my application with others thinking whether 
	  I was going to get the job or not but within minutes I quickly realized that we were all hired already.
	   During my three years at Nova I taught at Tennoji, Tennoji Mio, pictured here and at the Nova head office in Shinsaibashi teaching over the internet. 
	   I met many good teachers there that I'm still in contact with today.</p>
    </div>
    
    
    
  </div>
</div>

 
 
  </Container>
	</div>
);
};

export default About;