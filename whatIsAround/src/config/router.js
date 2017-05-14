import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import LogIn from '../components/log-in.component';
import RegisterAccount from '../components/register-account.component';
import RetriveAccount from '../components/retrive-account.component'
// export const Tabs = TabNavigator({
// 	LogIn: {
// 		screen: LogIn,
// 		// navigationOptions: {
// 		// 	tabBarLabel: 'LogIn',
// 		// 	tabBarIcon: ({tintColor}) => <Icon name="list" size={35} color={tintColor}/>
// 		// }
// 	},
// 	RegisterAccount: {
// 		screen: RegisterAccount,
// 		// navigationOptions: {
// 	 //    	tabBarLabel: 'Register',
// 	 //      	tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
// 	 //    },
// 	}
// })
// export const SettingStack = StackNavigator({
// 	RegisterAccount: {
// 		screen: RegisterAccount,
// 		navigationOptions: {
// 			title: 'Register Account'
// 		}
// 	}
// })


/*use modal*/
// export const Root = StackNavigator({
// 	LogIn: {
// 		screen: LogIn,
// 	},
// 	RegisterAccount: {
// 		screen: RegisterAccount,
// 	},
// }, {
// 	mode: 'modal',
// 	headerMode: 'none'
// })
export const Root = StackNavigator({
	LogIn: {
		screen: LogIn,
		navigationOptions: {
			title: 'AnonyHelper',
			// headerStyle:{ backgroundColor: '#e9e9ef'},
			// headerTitleStyle: { fontSize: 13 }
		}
	},
	RegisterAccount: {
		screen: RegisterAccount,
		navigationOptions: {
			title: 'Register',
			// headerStyle:{ backgroundColor: '#e9e9ef'},
			// headerTitleStyle: { fontSize: 13 },
		}
	},
	RetriveAccount: {
		screen: RetriveAccount,
		navigationOptions: {
			title: 'Retrive'
		}
	}
})
