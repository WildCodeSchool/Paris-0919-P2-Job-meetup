const initialState = {
  meetups: [],
}

function toggleList(state = initialState, action) {
  let nextState

  switch (action.type) {
    case 'MEETUP_LOAD':
      state.meetups = action.value
      nextState = state
      return nextState || state
    default: return state
  }
}

export default toggleList