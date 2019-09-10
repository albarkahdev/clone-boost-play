import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/container/auth/Login';
import RegisterScreen from './src/container/auth/Register';
import TabsScreen from './src/container/tabs/Tabs';
import AllListBoostSpotStack from './src/container/all_list_boost_spot/AllListBoostSpot';

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
		initialRouteName: 'Login'
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
		AllListBoostSpot: {
			screen: AllListBoostSpotStack
		}
	},
	{
		initialRouteName: 'Main',
		headerMode: 'none'
	}
)

const AppContainer = createAppContainer(RootStack);
