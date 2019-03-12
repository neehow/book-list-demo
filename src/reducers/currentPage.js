const currentPage = (state = 0, action) => {
  switch (action.type) {
    case 'PAGE_RIGHT':
      return state + 1
    case 'PAGE_LEFT':
      return state - 1
    default:
      return state
  }
}

export default currentPage
