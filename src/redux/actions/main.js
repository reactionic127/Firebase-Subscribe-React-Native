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
  const keys = [];
  const ref = firebase.database().ref().child('games');
  ref.once('value').then((snap) => {
    snap.forEach(function (item) {
      const data = item.val();
      const score = {
        key: item.key,
        HomeTotalScore: data.homeScore,
        AwayTotalScore: data.awayScore,
      };
      keys.push(score);
    });
    dispatch(getGameInfoSuccess(keys));
  });
  ref.on('child_changed', function (data) {
    keys.map(function (item) {
      if (data.key === item.key) {
        item.HomeTotalScore = data.val().homeScore;
        item.AwayTotalScore = data.val().awayScore;
      }
      return true;
    });
    dispatch(getGameInfoSuccess(keys));
  });
};

export const addScoreRequest = (home, away) => (dispatch) => {
  // dispatch(getGameInfoSuccess(keys));
  const obj = {
    homeScore: home,
    awayScore: away
  };
  const ref = firebase.database().ref().child('games');
  ref.push(obj);
};

