// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import LogIn from './src/components/log-in.component';
// import { Tabs } from './src/config/router'
// export default class whatIsAround extends Component {
//   renderHeader() {
//     return <View style={styles.header}>
//       <Text style={styles.headerText}>AnonyHelper</Text>
//     </View>
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         {this.renderHeader()}
//         {/*<RegisterAccount/>*/}
//         <LogIn/>
//         <Tabs />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'stretch',
//   },
//   header: {
//     marginTop:20,
//     paddingLeft:10,
//     paddingTop:10,
//     paddingBottom:10,
//     backgroundColor: '#373a41'
//   },
//   headerText: {
//     color: 'whitesmoke',
//     shadowColor: '#3c3b40'
//   },
// });

// AppRegistry.registerComponent('whatIsAround', () => whatIsAround);
import { AppRegistry } from 'react-native';
import App from './src/index';

AppRegistry.registerComponent('whatIsAround', () => App);
