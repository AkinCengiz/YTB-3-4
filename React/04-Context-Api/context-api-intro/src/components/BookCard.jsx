import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

function BookCard({book}) {
    const {info} = useContext(BookContext);
  return (
    <div className='book-card'>
        <img src={book.image} alt="picsum image" className="book-image" />
        <h3 className="card-title">{book.name}</h3>
        <p className='card-text'>{info}</p>
        <p className="book-author">{book.author}</p>
    </div>
  )
}

export default BookCard