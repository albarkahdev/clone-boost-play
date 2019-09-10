import React from 'react';
import { Platform } from 'react-native'; 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/container/auth/Login';
import RegisterScreen from './src/container/auth/Register';
import TabsScreen from './src/container/tabs/Tabs';

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
};

const AuthStack = createStackNavigator(
	{
		Login: LoginScreen,
		Register: RegisterScreen
	},
	{
		initialRouteName: 'Login',
		headerMode: Platform.OS === 'android' ? 'screen' : 'float'
	}
);

const RootStack = createStackNavigator(
	{
		Auth: {
			screen: AuthStack
		},
		Main: {
			screen: TabsScreen
		},
	},
	{
		initialRouteName: 'Main',
		headerMode: 'none'
	}
)

const AppContainer = createAppContainer(RootStack);
