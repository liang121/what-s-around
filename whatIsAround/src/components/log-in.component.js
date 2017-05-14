import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class LogIn extends Component {
  login() {
    console.log('login');
  }
  handleRegisterAccount() {
    console.log('123')
    this.props.navigation.navigate('RegisterAccount');
  }
  /*two input and two button*/
  renderLogInArea() {
    return <View style={styles.logInArea}>
          {/*phone input and password input*/}
          <View style={styles.inputArea}>
            <Icon name="mobile" color="#900"  style={{fontSize:25, marginLeft:1, marginTop:2}}/>
            <TextInput style={styles.textInput} placeholder='Phone Number' autoFocus={true}></TextInput>
          </View>
          <View style={styles.inputArea}>
            <Icon name="lock" color="#900"  style={{fontSize:20,  marginLeft:1, marginTop:5}}/>
            <TextInput style={[styles.textInput, {marginTop:1,}]} placeholder='Password'></TextInput>
          </View>
        {/*login button and register account button*/}
          <View style={{marginTop:20}}>
            <TouchableHighlight style={styles.loginButton} underlayColor="gray" onPress={this.login.bind(this)}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.loginButton, {marginTop:10}]} underlayColor="gray" onPress={this.handleRegisterAccount.bind(this)}>
              <Text style={styles.loginButtonText}>Register Account</Text>
            </TouchableHighlight>
          </View>
        {/*forget password suggestion*/}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{marginTop:100, fontSize:12, color: '#900'}}>
              Forget Password
            </Text>
          </View>
        </View>
  }
  renderLogInContainer() {
    return <View style={styles.logInContainer}>
      <View style={styles.logInTop}>
    {/*render top logo*/}
        <View style={styles.logo}>
          <Image 
            style={styles.logoImage}
            source={require('../assets/images/logo-small.png')}></Image>
        </View>
        {this.renderLogInArea()}
      </View>
    {/*render margin bottom*/}
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
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  logInContainer: {
    flex: 1,
    borderWidth: 1,
    paddingLeft:37,
    paddingRight: 37,
    paddingTop: 20
  },
  logInTop: {
    flex: 3,
  },
  logInBottom: {
    flex: 1,
  },
  logo: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  logInArea: {
    flex: 2,
    marginTop:50,
    borderRadius: 3,
    paddingTop:20,
    paddingLeft:15,
    paddingRight: 15
  },
  logoImage: {
    height:100, 
    width:100
  },
  inputArea: {
    flexDirection: 'row',
    borderBottomWidth: 1, 
    paddingBottom: 0, 
    borderBottomColor: '#900'
  },
  textInput: {
    height:30, 
    flex: 1, 
    paddingLeft:5, 
    marginTop:2, 
    fontSize:15
  },
  loginButton: {
    backgroundColor: '#900',
    paddingTop:15,
    paddingBottom: 15,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius:3,
  },
  loginButtonText: {
    color: 'white',
  }
});
