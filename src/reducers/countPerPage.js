const countPerPage = (state = 5, action) => {
  switch (action.type) {
    case 'SET_COUNT_PER_PAGE':
      return action.count
    default:
      return state
  }
}

export default countPerPage
