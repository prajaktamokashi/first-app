import React from 'react';

function Footer() {
    const style={
      color: "white",
      backgroundColor: "#5c5470",
      fontFamily: "Sans-Serif",
      justifyContent: "space-between",
      height: "300px",
      marginTop:"40px",
      paddingTop:"10px", 
    }
    const new1 = {
      marginLeft: "10px",
     fontFamily:'times new roman',
      fontSize: "30px",
    };
  
  return (
    <footer style={style}>
      <div>
        <div>
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul style={{display:'flex', flexDirection:'row'}} >
            <li style={{paddingLeft:'20px'}}><u><a href="/">Home</a></u></li>
            <li style={{paddingLeft:'20px'}}><u><a href="/books">Books</a></u></li>
            <li style={{paddingLeft:'20px'}}><u><a href="/authors">Authors</a></u></li>
            <li style={{paddingLeft:'20px'}}><u><a href="/contact">Contact</a></u></li>
          </ul>
        </div>
        <div>
          <h3>Connect With Us</h3>
        </div>
      </div>
      <div>
        <p>&copy; 2024 BookWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
