import React, { useContext } from 'react'
import BookCard from './BookCard'
import { BookContext } from '../contexts/BookContext'

function BookList() {
    const {books} = useContext(BookContext)
  return (
    <div id='book-list'>
        {
            books.map(book => <BookCard key={book.id} book={book} />)
        }
        
    </div>
  )
}

export default BookList