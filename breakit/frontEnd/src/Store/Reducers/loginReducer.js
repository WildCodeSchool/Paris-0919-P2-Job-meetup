const loginState = {
    name : null,
    firstName : null,
    mail : null,
    password : null,
    type : null,
    spec : null,
    languages : null,
    interest : null,
    text : null,
}

const LoginUser = (state = loginState, action) => {
    let nextState
    switch (action.type) {
        case 'USER_LOG':

                nextState = {
                    ...state,
                    name : action.value.name,
                    firstName : action.value.firstName,
                    mail : action.value.mail,
                    password : action.value.password
                }
            
            return nextState || state;
        
        case 'USER_TYPE' : 
            nextState = {
                ...state,
                type : action.value.type
            }
        
            return nextState || state;
        
        case 'USER_SPEC' : 
            nextState = {
                ...state,
                spec : action.value.spec
            }
            
            return nextState || state;

        case 'USER_LANG' : 
            nextState = {
                ...state,
                languages : action.value.cardsLanguages
            }
            return nextState || state;

        case 'USER_INT' : 
            nextState = {
                ...state,
                interest : action.value.interest
            }
            
            return nextState || state;
    
        case 'USER_DESC' : 
            nextState = {
                ...state,
                text : action.value.text
            }
            return nextState || state;
            
        default:
            return state;
    }
   
}

export default LoginUser