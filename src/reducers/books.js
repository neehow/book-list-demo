const books = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
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
