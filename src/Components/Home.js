import React from 'react';

function Home() {
  const imageStyle = {
    width: '100px', 
    height: '300px', 
  };

  return (
    <div>
      <h1>Welcome to our Website!</h1>
      <img
        src="https://th.bing.com/th/id/OIP.7zDC_-f2ayrdgfRZTeuGwgHaFj?w=231&h=180&c=7&r=0&o=5&pid=1.7"
        alt="Home Page"
        style={imageStyle}
      />
    </div>
  );
}

export default Home;
