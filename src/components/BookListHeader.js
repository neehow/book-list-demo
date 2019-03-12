import React from 'react'
import '../styles/BookListHeader.css'

const BookListHeader = ({title, subTitle}) => (
  <header className="header">
    <h3 className="header-title">{title}</h3>
    <span className="header-subtitle">{subTitle}</span>
    <a className="link-more" href="/more-books">查看更多</a>
  </header>
)

export default BookListHeader
