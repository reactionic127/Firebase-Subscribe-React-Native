import * as types from '../types';

export const setGoalNumber = (gn) => {
  return {
    type: types.SET_GOAL_NUMBER,
    data: gn
  };
};
