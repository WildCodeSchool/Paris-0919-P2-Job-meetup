import { createStore } from 'redux';
import rootReducer from './Reducers/rootReducer'
import toggleFilter from './Reducers/filterReducer'

export default createStore(toggleFilter)