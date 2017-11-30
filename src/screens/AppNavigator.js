import React from 'react';

import {
  TabNavigator,
  StackNavigator,
  StackRouter
} from 'react-navigation';

import Main from './Main'

const AppNavigator = StackNavigator({
  main: {
    screen: Main,
    navigationOptions: () => ({
      title: 'Main Page',
    }),
  }
},{
  headerMode: 'none',
});

const MainNavigator = StackNavigator(
  {
    mainnavigator: { screen: AppNavigator }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default MainNavigator;
