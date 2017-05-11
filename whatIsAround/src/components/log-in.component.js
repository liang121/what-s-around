import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class LogIn extends Component {
  
  renderLogInContainer() {
    return <View style={styles.logInContainer}>
      <View style={styles.logInTop}></View>
      <View style={styles.logInBottom}></View>
    </View>
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderLogInContainer()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  logInContainer: {
    flex: 1,
    alignItems: 'stretch',
    borderColor: 'blue',
    borderWidth: 1
  },
  logInTop: {
    flex: 2,
    borderColor: 'green',
    borderWidth: 1
  },
  logInBottom: {
    flex: 1,
    borderColor: 'grey',
    borderWidth: 1
  }
  // top: {
    
  //   // height:300,
  //   // width:300
  //   flex: 1,
  //   height:200


  // },
  // middleContainer: {

  // },
  // footer: {

  // }
});
