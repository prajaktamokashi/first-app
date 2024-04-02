import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const myStyle = {
    color: "white",
    backgroundColor: "#5c5470",
    fontFamily: "Sans-Serif",
    justifyContent: "space-between",
    height: "100px",
    marginBottom: "40px",
    display:"flex"
  };
  const new1 = {
    marginLeft: "10px",
   fontFamily:'times new roman',
    paddingLeft: "45px",
    marginTop: "25px",
    fontSize: "30px",
  };
  return (
    <header style={myStyle}>
      <nav style={myStyle}>
      <img style={{height:'100px',width:'130px'}} src="https://th.bing.com/th?id=OIP.UciJMvU5jv0298vBNNpYfwHaF4&w=280&h=222&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="book"/>
        <Link style={new1} to="/">
          Home
        </Link>
        <Link style={new1} to="/about-us">
          About Us
        </Link>
        <Link style={new1} to="/contact-us">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default Header;
