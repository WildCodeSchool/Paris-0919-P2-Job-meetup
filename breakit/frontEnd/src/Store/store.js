import { createStore, combineReducers } from 'redux'
import toggleFilter from './Reducers/filterReducer';
import toggleFilterMap from './Reducers/filterMapReducers';
import toggleUsers from './Reducers/filterUsers';
import LoginUser from './Reducers/loginReducer'

// combining two reducers into a single reducer
const reducer = combineReducers({
    toggleFilter,
    toggleFilterMap,
    toggleUsers,
    LoginUser
})
const store = createStore(reducer)

export default store