import { combineReducers } from 'redux'
import books from './books'
import currentPage from './currentPage'
import countPerPage from './countPerPage'
import transitioning from './transitioning'

export default combineReducers({
  books,
  currentPage,
  countPerPage,
  transitioning
})
