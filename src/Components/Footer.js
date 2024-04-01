import React from 'react';

function Footer() {
    const style={
        color: "black",
        backgroundColor: "orange",
        fontFamily: "Sans-Serif",
        justifyContent: "space-between",
        outerHeight: "20vh",
    }
  return (
    <footer style={style}>
      <p>© 2023 Book Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;