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
      if (data.Score !== undefined) {
        const score = {
          HomeTotalScore: data.Score.Home.P1 + data.Score.Home.P2 + data.Score.Home.P3 + data.Score.Home.OT + data.Score.Home.SO,
          AwayTotalScore: data.Score.Away.P1 + data.Score.Away.P2 + data.Score.Away.P3 + data.Score.Away.OT + data.Score.Away.SO,
          ClockStatus: data.Score.Clock.Status,
          ClockTime: data.Score.Clock.Timer
        };
        keys.push(score);
      }
    });
    dispatch(getGameInfoSuccess(keys));
  });
};

