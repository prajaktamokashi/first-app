import React from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
  const books = [
    { id: 1, name: 'Book 1', price: '$10', imageUrl: 'https://th.bing.com/th/id/OIP._zXfuEA95QhKw8_3pk3INgHaFG?w=236&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 2, name: 'Book 2', price: '$15', imageUrl: 'https://th.bing.com/th/id/OIP.mxb2csAYPZtO6h5G3S6HAgHaE8?w=231&h=180&c=7&r=0&o=5&pid=1.7' },
    { id: 3, name: 'Book 3', price: '$20', imageUrl: 'https://th.bing.com/th/id/OIP.uyi1Q5l2H8Zf9APJQplJfQHaEK?w=333&h=187&c=7&r=0&o=5&pid=1.7' },
  ];

  return (
    <div>
      <h1>List of Books</h1>
      <div className="book-grid">
        {books.map(book => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <div className="book-item">
              <img src={book.imageUrl} alt={book.name} />
              <p>Name: {book.name}</p>
              <p>Price: {book.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
