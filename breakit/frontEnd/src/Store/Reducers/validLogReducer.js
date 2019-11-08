const initialState = {
    isLoggedIn : false
  }
  
  function validLog(state=initialState, action) {
    let nextState
    switch (action.type) {
      case 'LOG':
        console.log('LOG',action);
        
        if(state.isLoggedIn === false) {
          nextState = {
            ...state,
            isLoggedIn : true
          }
        }
        return nextState || state
        default:
          return state
    }
  }
  
  export default validLog