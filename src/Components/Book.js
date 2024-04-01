import React from 'react';
function Book({ name, price }) {
    const book = [
        { id: 1, name: 'Book 1', price: '$10', imageUrl: 'book1.jpg' },
        { id: 2, name: 'Book 2', price: '$15', imageUrl: 'book2.jpg' },
        { id: 3, name: 'Book 3', price: '$20', imageUrl: 'book3.jpg' },
      ];
      return (
        <div>
          <h1>List of Books</h1>
          <ul>
            {book.map(book => (
              <li key={book.id}>
                <img src={book.imageUrl} alt={book.name} />
                <div>
                  <p>Name: {book.name}</p>
                  <p>Price: {book.price}</p>
                  <p>ID: {book.id}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default Book;