import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../redux/actions'
import { NavigationActions } from 'react-navigation';
import Expo from 'expo';

class Main extends React.Component {
  static route={
    navigationBar: {
        title: 'Main page'
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount() {

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

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { 
    return {
        goal: state.goal
    }
}, mapDispatchToProps)(Main);