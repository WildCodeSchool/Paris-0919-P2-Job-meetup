const initialState = {
    meetups : []
}

function toggleList(state= initialState, action) {
    let nextstate
    // console.log(meetup.fields.)
    switch (action.type) {
        case 'LIST_LOADED' :
        const stateLis = state
        stateLis.meetup = action.value
        nextstate = stateLis
        console.log(nextstate)
        return nextstate || state
        default: return state
    }
}

export default toggleList