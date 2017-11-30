import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as firebase from 'firebase';
import appReducer from './src/redux/reducers/index';
import AppWithNavigationState from './src/screens/AppWithNavigationState';

// firebase.initializeApp({
//   apiKey: 'AIzaSyB2FVnWf-KqOxMix998O-7CM9R0V26SoJA',
//   authDomain: 'selectscore-a8d39.firebaseapp.com',
//   databaseURL: 'https://selectscore-a8d39.firebaseio.com',
//   projectId: 'selectscore-a8d39',
//   storageBucket: 'selectscore-a8d39.appspot.com',
//   messagingSenderId: '910595381078'
// });

firebase.initializeApp({
  apiKey: 'AIzaSyAvVJEZx5wdKDNaFTFRBZaTa6Pk44zdoxI',
  authDomain: 'sportscore-da9eb.firebaseapp.com',
  databaseURL: 'https://sportscore-da9eb.firebaseio.com',
  projectId: 'sportscore-da9eb',
  storageBucket: 'sportscore-da9eb.appspot.com',
  messagingSenderId: '687953756873'
});

const store = createStore(appReducer, {}, applyMiddleware(thunkMiddleware));

export default class App extends Component {
  render() {
    return <Provider store={store}><AppWithNavigationState /></Provider>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
