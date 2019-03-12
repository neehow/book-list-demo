import { connect } from 'react-redux'
import { pageRight, pageLeft } from '../actions'
import BookList from '../components/BookList'

const getVisibleBooks = (books, currentPage, countPerPage) => {
  // switch (filter) {
    // case VisibilityFilters.SHOW_ALL:
    //   return books
    // case VisibilityFilters.SHOW_COMPLETED:
    //   return books.filter(t => t.completed)
    // case VisibilityFilters.SHOW_ACTIVE:
    //   return books.filter(t => !t.completed)
  //   default:
  //     throw new Error('Unknown filter: ' + filter)
  // }
  // TODO: 延长books列表
  return books
}

const mapStateToProps = state => ({
  books: getVisibleBooks(state.books, state.currentPage, state.countPerPage)
})

const mapDispatchToProps = dispatch => ({
  onPageRight: () => dispatch(pageRight),
  onPageLeft: () => dispatch(pageLeft)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)
