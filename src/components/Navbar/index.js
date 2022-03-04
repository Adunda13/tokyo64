import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import { GiJapan } from 'react-icons/gi';
import logo from './logo.jpg';

const Navbar = () => {
return (
	<>
	<Nav>	
	   <Bars />
		<NavMenu>
	

		<NavLink to='/' activeStyle>
        <img className="logoBox" src={logo} alt="Tokyo 64 logo"/>
		</NavLink> 
	
	
		<NavLink to='/about' activeStyle>
			About
		</NavLink>	
	
		<NavLink to='/art' activeStyle>
			Art
		</NavLink>
		<NavLink to='/contact' activeStyle>
			Contact Us
		</NavLink>
		<NavLink to='/events' activeStyle>
			Events
		</NavLink>
		<NavLink to='/immigrate' activeStyle>
			Immigrate
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		<h1><GiJapan className='floatingJapan' /></h1> 

		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>

	<div className="tsMenuBottom"></div>		

	</>
);
};

export default Navbar;
