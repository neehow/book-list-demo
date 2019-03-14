import React, { Component } from 'react'
import Book from './Book'
import { fetchBooks, transitionEnd, END_TRANSITION } from '../actions'
import { connect } from 'react-redux'
import '../styles/BookList.css'

class BookList extends Component {
  componentDidMount () {
    this.props.dispatch(fetchBooks(this.props.countPerPage))
  }

  handleTransitionEnd = () => {
    this.forceUpdate()
    const {currentPage, countPerPage} = this.props
    const direction = currentPage === 1 ? 'right' : 'left'
    console.log('handleTransitionEnd', currentPage, direction)
    this.props.dispatch(transitionEnd(direction, countPerPage))
    this.props.dispatch(END_TRANSITION)
  }

  render () {
    const { books, countPerPage, currentPage, transitioning } = this.props

    const booksCount = books.length
    const slideCount = booksCount / countPerPage / 2
    console.log('slideCount:', slideCount)

    const style = {
      left: -90 * slideCount + 'vw',
      // left: -90 * (slideCount + currentPage) + 'vw',
      transform: 'translateX(' + -currentPage * 90 + 'vw)',
      // transformOrigin: 'center'
    }

    let className = 'book-list-ul'
    if (transitioning) {
      className += ' transition'
    }

    return (
      <div className="book-list-div">
      <ul
        style={style}
        className={className}
        onTransitionEnd={this.handleTransitionEnd}
      >
        {books.map((book, i) => (
          <Book
            key={'' + i + this.props.id}
            {...book}
            countPerPage={countPerPage}
          />
          ))}
      </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    books: state.books,
    countPerPage: state.countPerPage,
    currentPage: state.currentPage,
    transitioning: state.transitioning
  })
}

export default connect(mapStateToProps)(BookList)
