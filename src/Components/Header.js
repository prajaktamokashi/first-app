import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const myStyle = {
    color: "black",
    backgroundColor: "orange",
    fontFamily: "Sans-Serif",
    justifyContent: "space-between"
  };
  const new1={
    marginLeft:"15px"
  }
  return (
    <header style={myStyle}>
      <nav>
         <Link style={new1} to="/">Home</Link>
         <Link style={new1} to="/about-us">About Us</Link>
         <Link  style={new1} to="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;