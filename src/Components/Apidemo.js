import React, { useState } from 'react';

function Apidemo() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      // Make a GET request to a sample API endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>API Request and Response Example</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {data && (
        <div>
          <h2>Received Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Apidemo;
