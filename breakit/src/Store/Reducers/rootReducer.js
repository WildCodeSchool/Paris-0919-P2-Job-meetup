import { combineReducers } from 'redux';
import filterReducer from './filterReducer'
import filterMapReducers from './filterMapReducers'


const rootReducer = combineReducers({filterMapReducers, filterReducer});

export default rootReducer