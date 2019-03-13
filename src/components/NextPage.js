// 翻页按钮
import React from 'react'
import { connect } from 'react-redux'
import { PageLeft, PageRight } from '../actions'
import '../styles/NextPage.css'

const NextPage = ({direction, dispatch, shouldHide}) => {
  let className = 'page-' + direction
  if (shouldHide) {
    className += ' hidden'
  }

  return (
    <span
      className={className}
      onClick={() => {
        if (direction === 'left') {
          dispatch(PageLeft)
        } else if (direction === 'right') {
          dispatch(PageRight)
        }
      }}
    >></span>
  )
}

const mapStateToProps = state => {
  return { shouldHide: state.books.length <= state.countPerPage }
}

export default connect(mapStateToProps)(NextPage)
