const books = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_BOOKS':
      return action.books
    case 'PAGE_RIGHT':
      return state
    case 'TRANSITION_END':
      const direction = action.direction
      if (direction === 'right') {
        state.push(...state.splice(0, action.countPerPage))
      } else if (direction === 'left') {
        state.unshift(...state.splice(-action.countPerPage, action.countPerPage))
      }
      return state
    default:
      return state
  }
}

export default books
