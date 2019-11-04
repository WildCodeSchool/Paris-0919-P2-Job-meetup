
import { createStore, combineReducers } from 'redux'
import toggleFilter from './Reducers/filterReducer';
import toggleFilterMap from './Reducers/filterMapReducers';
import toggleUsers from './Reducers/filterUsers';

// combining two reducers into a single reducer
const reducer = combineReducers({
    toggleFilter,
    toggleFilterMap,
    toggleUsers,
})
const store = createStore(reducer)

export default store