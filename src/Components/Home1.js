
import React from 'react';

function Home1() {
  const imageStyle = {
    width: '90%', 
    height: '800px', 
    margin:'10px'
  };

  return (
    <div>
      <h1>Welcome to our Blog!</h1>
      <img
        src="https://blogger.googleusercontent.com/img/a/AVvXsEhx_VfBctmYPJ7ZLlK0tYScJWC01AX4Fs1x2Xn47QtsNo9pr8RaNoMvVpsTxzMmz3eH73A4nXVIOF3UKOwVlQXj5rRcaygpQtKem2V4G9bn-bE9yhFfzaDDzaLUIXFnaK7N5LFzKjg3L9fga-4fdTqr6P0AijuQcHwlC2UxvNSi9Lu_5W3ha0l09MlP=s1080"
        alt="Home Page"
        style={imageStyle}
      />
    </div>
  );
}

export default Home1;
