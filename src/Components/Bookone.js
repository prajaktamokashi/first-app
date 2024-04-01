import React from 'react';
import { useParams } from 'react-router-dom';

const Bookone = () => {
  const { id } = useParams();

  
  const book = {
    id: id,
    name: `Book ${id}`,
    price: `22$`,
    imageUrl: `https://th.bing.com/th?q=Book.jpg&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247` 
  };

  return (
    <div>
      <h1>Book Detail</h1>
      <div>
        <img src={book.imageUrl} alt={book.name} />
        <p>Name: {book.name}</p>
        <p>Price: {book.price}</p>
      </div>
    </div>
  );
};

export default Bookone;
