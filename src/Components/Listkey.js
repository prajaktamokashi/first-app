import React, { useState } from 'react';

function Listkey() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange','Mango','Strawberry','Pineapple']);

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
return (
    <div>
      <h2>List and Keys Demo</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listkey;
