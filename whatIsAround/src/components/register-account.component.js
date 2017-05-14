import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class RegisterAccount extends Component {
  login() {
    console.log('login');
  }
  renderRetriveAccountContainer() {
    return <View style={styles.registerContainer}>
      <View style={styles.inputArea}>
        <TextInput style={styles.textInput} placeholder='Email' autoFocus={true}></TextInput>
      </View>
      <View style={styles.inputArea}>
        <TextInput style={styles.textInput} placeholder='Phone Number'></TextInput>
      </View>
      <View style={styles.inputArea}>
        <TextInput style={styles.textInput} placeholder='Password'></TextInput>
      </View>
    </View>
  }
  renderRegisterButton() {
    return <View style={styles.registerButtonContainer}>
      <TouchableHighlight style={styles.registerButton} underlayColor="gray" onPress={this.login.bind(this)}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableHighlight>
    </View>
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderRetriveAccountContainer()}
        {this.renderRegisterButton()}
        <View style={{flex:5}}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 50,
    paddingLeft:20,
    paddingRight:20
  },
  registerContainer: {
    flex: 3,
    borderWidth: 2,
    borderColor: '#dddddd',
    borderRadius: 10,
    shadowColor: '#dddddd',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  registerButtonContainer: {
    flex:1,
    marginTop:30
  },
  registerButtonText: {
    color: 'white'
  },
  registerButton: {
    backgroundColor: '#900',
    paddingTop:15,
    paddingBottom: 15,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius:3,
  },
  inputArea: {
    paddingLeft:20,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    flex:1,
    justifyContent: 'center'
  },
  textInput: { 
    flex: 1, 
    fontSize:15
  },
});
