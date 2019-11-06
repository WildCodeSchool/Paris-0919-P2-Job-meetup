const basicState = {
    users : []
  }
  
  function toggleFilterMap(state=basicState, action) {
   let nextState
  console.log('triggered' , action);
  
   switch (action.type) {
     case 'USER_LOADED' : 
     console.log('USER_LOADED');
     
      state.users = action.value
      nextState = state
      
      return nextState || state
        default : return state
       }
   }
   
  export default toggleFilterMap