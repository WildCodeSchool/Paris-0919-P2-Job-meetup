const initialState = {
  users : []
}

function toggleFilterMap(state=initialState, action) {
 let nextState
 console.log(state.users.length)
 switch (action.type) {
   case 'USER_LOADED' :  
    const stateTmp = state
    stateTmp.users = action.value
    nextState = stateTmp
    console.log(state.users);
    
    return nextState || state
      default : return state
     }     
 }
export default toggleFilterMap