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

export const pageRight = {
  type: 'PAGE_RIGHT'
}

export const pageLeft = {
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
  return async dispatch => {
    dispatch(requestBooks())
    // 模拟从后端接口获取数据
    const json = await new Promise((resolve, reject) => {
      const response = {
        data: {
          books: booksData
        }
      }
      setTimeout(() => {
        resolve(response);
      }, 1000)
    })
    return dispatch(receiveBooks(json))
  }
}

