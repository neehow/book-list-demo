import React, { Component } from 'react'
import Book from './Book'
import { fetchBooks } from '../actions'
import { connect } from 'react-redux'
import '../styles/BookList.css'

class BookList extends Component {
  componentDidMount () {
    this.props.dispatch(fetchBooks())
  }

  render () {
    const { books, countPerPage, currentPage } = this.props
    while (books.length % countPerPage !== 0) {
      books.push({})
    }

    const bookWidth = 90 / countPerPage + 'vw'
    const lengthOfBooks = books.length
    const slideCount = lengthOfBooks / countPerPage
    console.log('slideCount:', slideCount)
    if (currentPage % slideCount === 0) {
      // 目前位于第一屏
      const style = {transform: 'translateX(-90vw)'}

      return (
        <div>
        <ul style={style} className="book-list-ul">
          {books.map((book, i) => (
            <Book
            key={i}
            {...book}
            />
            ))}
        </ul>
        <ul className="book-list-ul">
          {books.map((book, i) => (
            <Book
            key={i}
            {...book}
            />
            ))}
        </ul>
        </div>
      )
    } else if ((currentPage + 1) % slideCount === 0) {
      // 目前位于最后一屏
      const leftStyle = {transform: 'translateX(-' + 90 * (slideCount - 1) + 'vw)'}
      const rightStyle = {transform: 'translateX(90vw)'}

      return (
        <div>
        <ul style={leftStyle} className="book-list-ul">
          {books.map((book, i) => (
            <Book
            key={i}
            {...book}
            />
            ))}
        </ul>
        <ul style={rightStyle} className="book-list-ul">
          {books.map((book, i) => (
            <Book
            key={i}
            {...book}
            />
            ))}
        </ul>
        </div>
      )
    }
    else {
      // 目前位于中间屏
      const leftStyle = {transform: 'translateX(-' + 90 * currentPage + 'vw)'}

      return (
        <div>
        <ul style={leftStyle} className="book-list-ul">
          {books.map((book, i) => (
            <Book
            key={i}
            {...book}
            />
            ))}
        </ul>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  books: state.books,
  countPerPage: state.countPerPage,
  currentPage: state.currentPage
})

export default connect(mapStateToProps)(BookList)
