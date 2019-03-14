import { booksData } from '../utils/booksData'

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

const receiveBooks = (json, countPerPage) => {
  const books = json.data.books
  if (Array.isArray(books) && books.length) {
    while (books.length % countPerPage !== 0) {
      books.push({})
    }
    books.push(...books)
  }
  return ({
    type: 'RECEIVE_BOOKS',
    books
  })
}

export const fetchBooks = (countPerPage) => {
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
      response => dispatch(receiveBooks(response, countPerPage)),
      error => console.log('An error occured.', error)
    )
  }
}

// 书籍列表翻页滚动结束
export const transitionEnd = (direction, countPerPage) => ({
  type: 'TRANSITION_END',
  direction,
  countPerPage
})

export const START_TRANSITION = {
  type: 'START_TRANSITION'
}

export const END_TRANSITION = {
  type: 'END_TRANSITION'
}
