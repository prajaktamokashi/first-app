import React from 'react';
import ReactDOM from 'react-dom';


const styleTable={
  border:"3px solid red",
  padding:"4px",
  color:"blue",
  
}
const styleCell={
border:"3px solid black",

}
const Table = () => {
  
  const data = [
    { id: 1, name: 'Trisandhya', age: 22 },
    { id: 2, name: 'Srushti', age: 20 },
    { id: 3, name: 'Akash', age: 24 },
    { id: 4, name: 'Dhananjay', age: 28 }
  ];

  return (
    <table style={styleTable}>
      <thead>
        <tr>
          <th style={styleCell}>ID</th>
          <th style={styleCell}>Name</th>
          <th style={styleCell}>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td style={styleCell}>{item.id}</td>
            <td style={styleCell}>{item.name}</td>
            <td style={styleCell}>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;