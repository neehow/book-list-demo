// 翻页按钮
import React from 'react'
import { connect } from 'react-redux'
import { pageLeft, pageRight } from '../actions'
import '../styles/NextPage.css'

const NextPage = ({direction, dispatch}) => (
  <span
    className={'page-' + direction}
    onClick={() => {
      if (direction === 'left') {
        dispatch(pageLeft)
      } else if (direction === 'right') {
        dispatch(pageRight)
      }
    }}
  >></span>
)

export default connect()(NextPage)
