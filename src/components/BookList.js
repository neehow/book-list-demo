import React from 'react'
import Book from './Book'

const BookList = ({books}) => (
  <ul>
    {books.map(book => (
      <Book
        key={book.id}
        {...book}
      />
    ))}
  </ul>
)

export default BookList
