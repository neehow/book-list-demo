const currentPage = (state = 0, action) => {
  switch (action.type) {
    case 'PAGE_RIGHT':
      return Math.min(state + 1, 1)
    case 'PAGE_LEFT':
      return Math.max(state - 1, -1)
    case 'TRANSITION_END':
      return 0
    default:
      return state
  }
}

export default currentPage
