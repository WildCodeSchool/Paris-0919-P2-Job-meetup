const basicState = {
    user : []

  }
  
  function storeLoggedUser(state = basicState, action) {
    let nextState
  
    switch (action.type) {
      case 'LOG':
        state.user = action.value
        nextState = state
  
        return nextState || state
      default: return state
    }
  }
  
  export default storeLoggedUser