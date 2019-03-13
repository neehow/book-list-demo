import React from 'react'
import '../styles/Book.css'

const Book = (props) => {
  if (!props.id) {
    return (<li className="Book-container"></li>)
  } else {
    return (
      <li className="Book-container">
        <h4>{props.name}</h4>
        <span>{props.author}</span>
        <p>{props.description}</p>
        <div className="Book-footer">
          <span className="rating">{props.rating}</span>
          <ul className="Book-tags">
            {
              props.tags.map((tag, i) => (
                <li className="Book-tag" key={i}>{tag}</li>
              ))
            }
          </ul>
        </div>
      </li>
    )
  }
}

export default Book
