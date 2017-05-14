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

export default class RetriveAccount extends Component {
  login() {
  }
  renderRetriveAccountContainer() {
    return <View style={styles.retriveContainer}>
      <View style={styles.inputArea}>
        <TextInput style={styles.textInput} placeholder='Email' autoFocus={true}></TextInput>
        {/*<TextInput style={styles.textInput} placeholder='Phone Number' autoFocus={true}></TextInput>*/}
      </View>
    </View>
  }
  renderRetriveButton() {
    return <View style={styles.retriveButtonContainer}>
      <TouchableHighlight style={styles.retriveButton} underlayColor="gray" onPress={this.login.bind(this)}>
        <Text style={styles.retriveButtonText}>Retrive</Text>
      </TouchableHighlight>
    </View>
  }
  renderSelectTab() {
    return <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
      <View style={{flex:1, textAlign:'center', justifyContent: 'center', alignItems: 'center', borderBottomWidth:2, borderBottomColor:'red', paddingBottom:5}}><Text>By Email</Text></View>
      <View style={{flex:1, textAlign:'center', justifyContent: 'center', alignItems: 'center', paddingBottom:5}}><Text>By Phone</Text></View>
    </View>
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderSelectTab()}
        {this.renderRetriveAccountContainer()}
        {this.renderRetriveButton()}
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
    paddingRight:20,
    // backgroundColor: 'white'
  },
  retriveContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#dddddd',
    borderRadius: 10,
    shadowColor: '#dddddd',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    marginTop:30
  },
  retriveButtonContainer: {
    flex:1,
    marginTop:30
  },
  retriveButtonText: {
    color: 'white'
  },
  retriveButton: {
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
