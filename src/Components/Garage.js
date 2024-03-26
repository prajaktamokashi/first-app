import ReactDOM from 'react-dom/client';
import React from 'react';

function Car(props) {
  return <li>My Brand: { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi','Lamborghini','Mercedes','Rolls-Royce'];
  return (
    <>
	    <h3>My garage car list:</h3>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

export default Garage;