const books = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_BOOKS':
      return action.books
    case 'PAGE_RIGHT':
      return state
    default:
      return state
  }
}

export default books
