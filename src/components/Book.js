import React from 'react'
import '../styles/Book.css'

const Book = (props) => {
  const countPerPage = props.countPerPage
  const style = {
    width: 90 / countPerPage + 'vw',
    // height: '200px'
  }

  if (!props.id) {
    return (<li style={style} className="book-container"></li>)
  } else {
    return (
      <li style={style} className="book-container">
        <div className="book-cover"></div>
        <h4 className="book-title">{props.id + '. ' + props.name}</h4>
        <span className="book-author">{props.author}</span>
        <p className="book-desc">{props.description}</p>
        <div className="book-footer">
          <span className="book-rating">{props.rating}</span>
          <ul className="book-tags-list">
            {
              props.tags.map((tag, i) => (
                <li className="book-tag" key={i}>{tag}</li>
              ))
            }
          </ul>
        </div>
      </li>
    )
  }
}

export default Book
