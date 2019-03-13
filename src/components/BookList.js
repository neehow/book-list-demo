import React, { Component } from 'react'
import Book from './Book'
import { fetchBooks } from '../actions'

class BookList extends Component {
  componentDidMount () {
    this.props.dispatch(fetchBooks())
  }

  render () {
    const { books } = this.props
    return (
      <ul>
        {books.map(book => (
          <Book
            key={book.id}
            {...book}
          />
        ))}
      </ul>
    )
  }
}

export default BookList
