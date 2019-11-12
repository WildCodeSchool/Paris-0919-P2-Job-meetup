import { createStore, combineReducers } from 'redux'
import toggleFilter from './Reducers/filterReducer';
import toggleFilterMap from './Reducers/filterMapReducers';
import toggleUsers from './Reducers/filterUsers';
import LoginUser from './Reducers/loginReducer';
import validLog from './Reducers/validLogReducer'
import toggleList from './Reducers/filterMeetupReducer'
import storeLoggedUser from './Reducers/loggedUserReducer'
// combining two reducers into a single reducer
const reducer = combineReducers({
    toggleFilter,
    toggleFilterMap,
    toggleUsers,
    LoginUser,
    validLog,
    toggleList,
    storeLoggedUser
})
const store = createStore(reducer)

export default store