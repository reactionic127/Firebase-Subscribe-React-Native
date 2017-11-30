import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Expo from 'expo';
import { NavigationActions } from 'react-navigation';
import { ActionCreators } from '../redux/actions';
import { getGameInfoRequest } from '../redux/actions/main';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreView: {
    width: width - 20,
    height: 100,
    justifyContent: 'center',
    marginLeft: 10
  },
  alignView: {
    flexDirection: 'row'
  },
  leftView: {
    width: 200
  }
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

  renderScores() {
    const {gamesData} = this.props;
    return (
      gamesData.map((value, index) => {
        return (
          <View key={index} style={styles.scoreView}>
            <View style={styles.alignView}>
              <View style={styles.leftView}>
                <Text>
                  HomeTotalScore:
                </Text>
              </View>
              <Text>
                {value.HomeTotalScore}
              </Text>
            </View>
            <View style={styles.alignView}>
              <View style={styles.leftView}>
                <Text>
                  AwayTotalScore:
                </Text>
              </View>
              <Text>
                {value.AwayTotalScore}
              </Text>
            </View>
            <View style={styles.alignView}>
              <View style={styles.leftView}>
                <Text>
                  ClockStatus:
                </Text>
              </View>
              <Text>
                {value.ClockStatus}
              </Text>
            </View>
            <View style={styles.alignView}>
              <View style={styles.leftView}>
                <Text>
                  ClockTime:
                </Text>
              </View>
              <Text>
                {value.ClockTime}
              </Text>
            </View>
          </View>
        );
      })
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.renderScores()}
      </ScrollView>
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
