const basicState = {
  users: []
}

function toggleFilterMap(state = basicState, action) {
  let nextState

  switch (action.type) {
    case 'USER_LOADED':
      state.users = action.value
      nextState = state
      console.log(nextState)
      return nextState || state
    default: return state
  }
}

export default toggleFilterMap
