import { booksData } from '../utils/booksData'

let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const PageRight = {
  type: 'PAGE_RIGHT'
}

export const PageLeft = {
  type: 'PAGE_LEFT'
}

export const setCountPerPage = count => ({
  type: 'SET_COUNT_PER_PAGE',
  count
})

const requestBooks = () => ({
  type: 'REQUEST_BOOKS'
})

const receiveBooks = (json) => ({
  type: 'RECEIVE_BOOKS',
  books: json.data.books
})

export const fetchBooks = () => {
  return dispatch => {
    dispatch(requestBooks())
    // 模拟从后端接口获取数据
    return new Promise((resolve, reject) => {
      const response = {
        data: {
          books: booksData
        }
      }
      setTimeout(() => {
        resolve(response);
      }, 500)
    }).then(
      response => dispatch(receiveBooks(response)),
      error => console.log('An error occured.', error)
    )
  }
}
