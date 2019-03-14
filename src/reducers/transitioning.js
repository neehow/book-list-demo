const transitioning = (state = false, action) => {
  switch (action.type) {
    case 'START_TRANSITION':
      return true
    case 'END_TRANSITION':
      return false
    default:
      return state
  }
}

export default transitioning
