import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();

  const book = { id: id, name: `Book ${id}`, price: `$${Math.floor(Math.random() * 20) + 5}` };

  return (
    <div>
      <h2>Book Detail</h2>
      <div className="book-detail">
        <img src={book.imageUrl} alt={book.name} />
        <p>Name: {book.name}</p>
        <p>Price: {book.price}</p>
      </div>
    </div>
  );
};

export default BookDetail;
