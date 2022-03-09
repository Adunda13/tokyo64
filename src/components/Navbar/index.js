import React from 'react';
import {Container, Nav,Navbar, NavDropdown,Button} from 'react-bootstrap';
import logo from './logo.jpg';

const Navbox = () => {
return (
	<>
<Navbar className="tsMenu" expand="lg">
  <Container>
    <Navbar.Brand href="/"><span className="logoText">Tokyo</span><img className="logoBox" src={logo} alt="Tokyo 64" /><span className="logoText">64</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link  href="/">Home</Nav.Link>
		<Nav.Link  href="/about">About</Nav.Link>	
		<NavDropdown  title="Culture" id="basic-nav-dropdown">
          <NavDropdown.Item href="/culture">Cuisine</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>		
		<Nav.Link  href='/contact'>Contact Us</Nav.Link>
		<Nav.Link  href='/events'>Events</Nav.Link>
		<Nav.Link  href='/immigrate'>Immigrate</Nav.Link>
		<Nav.Link  href='/services'>Services</Nav.Link>
	    <Nav.Link><Button className="tsNavButton" href='/sign-up'>Sign Up</Button></Nav.Link>        
		
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className="tsMenuBottom"></div>
</>
);
};

export default Navbox;