import createReducer from '../createReducer';
import {
  GET_GAMEINFO_STARTED,
  GET_GAMEINFO_SUCCESS,
  GET_GAMEINFO_FAILURE
} from '../types';

const INITIAL_STATE = {
  gamesData: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GAMEINFO_STARTED:
      return {
        ...state,
      };
    case GET_GAMEINFO_SUCCESS:
      // console.log(action.data);
      return {
        ...state,
        gamesData: action.data
      };
    case GET_GAMEINFO_FAILURE:
      return {
        gamesData: []
      };
    default:
      return state;
  }
};
