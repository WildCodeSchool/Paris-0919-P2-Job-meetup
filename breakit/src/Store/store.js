
import { createStore, combineReducers } from 'redux'
import toggleFilter from './Reducers/filterReducer';
import toggleFilterMap from './Reducers/filterMapReducers';

// combining two reducers into a single reducer
const reducer = combineReducers({
    toggleFilter,
    toggleFilterMap
})
const store = createStore(reducer)

export default store