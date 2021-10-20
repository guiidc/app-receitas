import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import searchBarReducer from './searchBarReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ recipesReducer, searchBarReducer, userReducer })

export default rootReducer;
