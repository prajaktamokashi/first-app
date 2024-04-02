import React from 'react';
import { useParams } from 'react-router-dom';

const Booktwo = () => {
  const { id } = useParams();

  
  const book = {
    id: id,
    name: `Book ${id}`,
    price: `13$`,
    imageUrl: `https://th.bing.com/th/id/OIP.uyi1Q5l2H8Zf9APJQplJfQHaEK?w=333&h=187&c=7&r=0&o=5&pid=1.7` 
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

export default Booktwo;
