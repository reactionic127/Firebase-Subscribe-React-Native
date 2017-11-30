import { combineReducers } from 'redux';
import * as mainReducer from './main';

const appReducer = combineReducers(Object.assign(
  mainReducer
));

export default appReducer;

