import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Expo from 'expo';
import { NavigationActions } from 'react-navigation';
import Modal from 'react-native-modal';
import { ActionCreators } from '../redux/actions';
import { getGameInfoRequest, addScoreRequest } from '../redux/actions/main';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreView: {
    width: width - 20,
    height: 50,
    justifyContent: 'center',
    marginLeft: 10,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  alignView: {
    flexDirection: 'row'
  },
  leftView: {
    width: 200
  },
  buttonView: {
    width,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addData: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#369BE5'
  },
  addText: {
    color: 'white'
  },
  modalForm: {
    width,
    height: 200,
    // marginLeft: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeScoreInput: {
    fontSize: 14,
    color: 'black',
    width: width - 50,
    height: 50,
  }
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      homeScore: '',
      awayScore: ''
    };
    this.onAddData = this.onAddData.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount() {
    this.props.getGameInfoRequest();
  }

  onAddData() {
    this.setState({
      isModalVisible: true
    });
  }

  onConfirm() {
    const {homeScore, awayScore} = this.state;
    this.props.addScoreRequest(homeScore, awayScore);
    this.setState({
      isModalVisible: false,
      homeScore: '',
      awayScore: ''
    });
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
          </View>
        );
      })
    );
  }

  render() {
    const {homeScore, awayScore} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.addData} onPress={this.onAddData}>
            <Text style={styles.addText}>
              Add Data
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {this.renderScores()}
        </ScrollView>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalForm}>
            <View>
              <TextInput
                style={styles.homeScoreInput}
                placeholder="homeScore"
                size={14}
                autoCapitalize="none"
                value={homeScore}
                returnKeyType="next"
                onChangeText={text => this.setState({
                  homeScore: text
                })}
              />
              <TextInput
                style={styles.homeScoreInput}
                placeholder="awayScore"
                size={14}
                autoCapitalize="none"
                value={awayScore}
                returnKeyType="next"
                onChangeText={text => this.setState({
                  awayScore: text
                })}
              />
              <TouchableOpacity style={styles.addData} onPress={this.onConfirm}>
                <Text style={styles.addText}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
