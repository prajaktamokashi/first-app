import React, { useState, useCallback } from 'react';

function Callback() {
 
  const [count, setCount] = useState(0);

  
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); 

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Callback;
