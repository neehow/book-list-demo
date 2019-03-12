import { combineReducers } from 'redux'
import books from './books'
import currentPage from './currentPage'
import countPerPage from './countPerPage'

export default combineReducers({
  books,
  currentPage,
  countPerPage
})
