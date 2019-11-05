const initialState = {
    meetups: [],
}

function toggleList(state = initialState, action) {
    let nextState
    // console.log(meetup.fields.)
    switch (action.type) {
        case 'MEETUP_LOAD':
                
            state.meetups = action.value
            
            nextState = state
            console.log('next', nextState)
            return nextState || state
              default : return state
}
}

export default toggleList