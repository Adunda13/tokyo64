import React from 'react';
import logo from './logo.jpg';

function Logo() {
    return (
        <div>
        <img className="logoBox" src={logo} alt="Tokyo 64 logo"/>
        <a
          className="App-link"
          href="https://www.tokyo64.com"
          target="_blank"
          rel="noopener noreferrer"
        >    
        </a></div>   
    );
}

export default Logo

