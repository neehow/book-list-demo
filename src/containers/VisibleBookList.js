import { connect } from 'react-redux'
import { pageRight, pageLeft } from '../actions'
import BookList from '../components/BookList'

const getVisibleBooks = (books, currentPage, countPerPage) => {
  if (books.length <= countPerPage) {
    // 书籍数量不够一页
    return books
  }
  return books.slice(currentPage)
}

const mapStateToProps = state => ({
  books: getVisibleBooks(state.books, state.currentPage, state.countPerPage)
})

const mapDispatchToProps = dispatch => ({
  onPageRight: () => dispatch(pageRight),
  onPageLeft: () => dispatch(pageLeft),
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)
