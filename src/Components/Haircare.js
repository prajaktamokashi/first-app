
import React from 'react';

const divStyle = {
  display:'flex',
};
const Haircare = () => {
  const  Haircare= [
    
  ];

  return (
    <div className=" Haircare-list" style={divStyle}>
      { Haircare.map(( Haircare, index) => (
        <img key={index} src={ Haircare} alt={` Haircare ${index + 1}`} />
      ))}
    </div>
  );
}


export default Haircare;
