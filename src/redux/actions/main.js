import * as firebase from 'firebase';
import {
  GET_GAMEINFO_STARTED,
  GET_GAMEINFO_SUCCESS,
  GET_GAMEINFO_FAILURE
} from '../types';

export const getGameInfoStarted = (gameInfo) => {
  return {
    type: GET_GAMEINFO_STARTED,
    data: gameInfo
  };
};

export const getGameInfoSuccess = (gameInfo) => {
  return {
    type: GET_GAMEINFO_SUCCESS,
    data: gameInfo
  };
};

export const getGameInfoFailure = (error) => {
  return {
    type: GET_GAMEINFO_FAILURE,
    error
  };
};

export const getGameInfoRequest = () => (dispatch) => {
  console.log('called');
  const keys = [];
  const ref = firebase.database().ref().child('games').orderByChild('id');
  ref.once('value', function (snap) {
    snap.forEach(function (item) {
      const itemVal = item.val();
      keys.push(itemVal);
    });
    dispatch(getGameInfoSuccess(keys));
  });
};

