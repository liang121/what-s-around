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

export default class LogIn extends Component {
  login() {
    console.log('login');
  }
  renderLogInContainer() {
    return <View style={styles.logInContainer}>
      <View style={styles.logInTop}>
        <View style={styles.logo}>
          <Image 
            style={styles.logoImage}
            source={require('../assets/images/logo-small.png')}></Image>
        </View>
        <View style={styles.logInArea}>
          
          <View style={{flexDirection: 'row',borderBottomWidth: 1, paddingBottom: 0, borderBottomColor: '#900'}}>
            <Icon name="mobile" color="#900"  style={{fontSize:25, marginLeft:1, marginTop:2}}/>
            <TextInput style={{height:30, flex: 1, paddingLeft:5, marginTop:2, fontSize:15}} placeholder='Phone Number' autoFocus={true}></TextInput>
          </View>
          <View style={{flexDirection: 'row',borderBottomWidth: 1, paddingBottom: 0, borderBottomColor: '#900'}}>
            <Icon name="lock" color="#900"  style={{fontSize:20,  marginLeft:1, marginTop:5}}/>
            <TextInput style={{height:30, flex: 1, paddingLeft:5, marginTop:1, fontSize:15}} placeholder='Password' autoFocus={true}></TextInput>
          </View>
          <View style={{marginTop:20}}>
            <TouchableHighlight style={styles.loginButton} underlayColor="gray" onPress={this.login.bind(this)}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.loginButton, {marginTop:10}]} underlayColor="gray" onPress={this.login.bind(this)}>
              <Text style={styles.loginButtonText}>Register Account</Text>
            </TouchableHighlight>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{marginTop:100, fontSize:12, color: '#900'}}>
              Forget Password
            </Text>
          </View>
        </View>
      </View>
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
    // alignItems: 'stretch',
    // borderColor: 'blue',
    borderWidth: 1,
    paddingLeft:37,
    paddingRight: 37,
    paddingTop: 20
  },
  logInTop: {
    flex: 3,
    // borderColor: 'green',
    // borderWidth: 1
  },
  logInBottom: {
    flex: 1,
    // borderColor: 'grey',
    // borderWidth: 1
  },
  logo: {
    flex: 1,
    // borderColor: 'green',
    // borderWidth: 1,
    // backgroundColor: 'white',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  logInArea: {
    flex: 2,
    // borderColor: 'blue',
    // borderWidth: 1,
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
  loginButton: {
    backgroundColor: '#900',
    paddingTop:10,
    paddingBottom: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius:3,
  },
  loginButtonText: {
    color: 'white',
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
