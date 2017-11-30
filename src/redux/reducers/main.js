import createReducer from '../createReducer';
import * as types from '../types';

export const goal = createReducer('', {
  [types.SET_GOAL_NUMBER](state, action) {
    return action.data;
  },
});
