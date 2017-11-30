import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Expo from 'expo';
import { NavigationActions } from 'react-navigation';
import { ActionCreators } from '../redux/actions';
import { getGameInfoRequest } from '../redux/actions/main';

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
    this.props.getGameInfoRequest();
  }

  render() {
    console.log('gameData', this.props.gamesData);
    return (
      <View style={styles.container}>
        <Text>
          aaa
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gamesData: state.default.gamesData
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
