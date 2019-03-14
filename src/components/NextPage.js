// 翻页按钮
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { PageLeft, PageRight, START_TRANSITION } from '../actions'
import '../styles/NextPage.css'

class NextPage extends Component {
  handleClick = () => {
    const {direction, dispatch} = this.props
    if (direction === 'left') {
      dispatch(PageLeft)
    } else if (direction === 'right') {
      dispatch(PageRight)
    }
    dispatch(START_TRANSITION)
  }

  render () {
    const {direction, shouldHide} = this.props
    let className = 'page-' + direction
    if (shouldHide) {
      className += ' hidden'
    }

    return (
      <span
        className={className}
        onClick={this.handleClick}
      >></span>
    )
  }
}

const mapStateToProps = state => {
  return { shouldHide: state.books.length <= state.countPerPage }
}

export default connect(mapStateToProps)(NextPage)
