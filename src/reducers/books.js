const books = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_BOOKS':
      return action.books
    case 'TOGGLE_BOOK':
      return state.map(book =>
        (book.id === action.id)
          ? {...book, completed: !book.completed}
          : book
      )
    default:
      return state
  }
}

export default books
