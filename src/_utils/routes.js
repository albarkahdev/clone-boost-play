/**
 * routes.js
 *
 * route app
 *
 * @albarkahdev
 */


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../scenes/auth/Login';
import RegisterScreen from '../scenes/auth/Register';
import TabsScreen from '../scenes/tabs/Tabs';
import LoveScreenStack from '../scenes/love/love';
import AllListBoostSpotStack from '../scenes/all_list_boost_spot/AllListBoostSpot';


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
		Love: {
			screen: LoveScreenStack
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

export default Routes = createAppContainer(RootStack);
