import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Expo from 'expo';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';
import { ActionCreators } from '../redux/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const keys = [];
    const ref = firebase.database().ref().child('games').orderByChild('id');
    ref.once('value', function (snap) {
      snap.forEach(function (item) {
        const itemVal = item.val();
        keys.push(itemVal);
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          aaa
        </Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    goal: state.goal
  };
}, mapDispatchToProps)(Main);
