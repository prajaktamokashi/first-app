import React, { useState } from 'react';

const Mouseevent = () => {
  const [message, setMessage] = useState('');

  // Event handler for mouse enter
  const handleMouseEnter = () => {
    setMessage('Mouse entered the area');
  };

  // Event handler for mouse leave
  const handleMouseLeave = () => {
    setMessage('Mouse left the area');
  };

  return (
    <div
      style={{ border: '1px solid black', textAlign: 'center',height:'200px',width:'300px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h4>Move your mouse over this area</h4>
      <p>{message}</p>
    </div>
  );
};

export default Mouseevent;
