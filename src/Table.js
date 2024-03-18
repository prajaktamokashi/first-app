import React from 'react';
import ReactDOM from 'react-dom';


const Table = () => {
  
  const data = [
    { id: 1, name: 'Trisandhya', age: 22 },
    { id: 2, name: 'Srushti', age: 20 },
    { id: 3, name: 'Akash', age: 23 }
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table