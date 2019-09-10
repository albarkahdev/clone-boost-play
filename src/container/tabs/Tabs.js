import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Platform, View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../home/home';
import BoostSpotScreen from '../boost_spot/boost_spot';
import * as Icon from '../../_ui/_icon/icons';

export const TemplateScreen = ({ title }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>{title}!</Text>
		</View>
	);
}

class LoveScreen extends React.Component {
	render() {
		return <TemplateScreen title="Love" />;
	}
}

class MyDealsScreen extends React.Component {
	render() {
		return <TemplateScreen title="My Deals" />;
	}
}

class AccountScreen extends React.Component {
	render() {
		return <TemplateScreen title="Account" />;
	}
}

class IconLove extends React.Component {
	render() {
		return (
			<View
				style={{
					position: 'absolute',
					top: Platform.OS === 'android' ? -25 : -20,
					backgroundColor: '#EF3026',
					borderRadius: 45,
					width: 67,
					height: 67,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<Image source={Icon.boost} style={{ width: 32, height: 32 }} />
			</View>
		);
	}
}

const getTabBarIcon = (navigation, focused, tintColor) => {
	const { routeName } = navigation.state;

	switch (routeName) {
		case "Home":
			return <AntDesign name="home" size={25} color={tintColor} />;
		case "Boost Spot":
			return <MaterialIcons name="store" size={25} color={tintColor} />;
		case "Love":
			return <IconLove />;
		case "My Deals":
			return <MaterialCommunityIcons name="ticket-percent" size={25} color={tintColor} />;
		case "Account":
			return <FontAwesome name="user-circle-o" size={22} color={tintColor} />;
		default:
			break;
	}
};

const getTabBarLabel = (navigation, focused, tintColor) => {
	const { routeName } = navigation.state;
	if (routeName === "Love") {
		return <View />;
	}
	return <Text style={{ color: tintColor, textAlign: 'center' }}>{routeName}</Text>;
};

const getTabBarOnPress = (navigation, defaultHandler) => {
	const { routeName } = navigation.state;
	if (routeName === "Account") {
		return navigation.navigate('Login');
	}
	return defaultHandler();
};

export default createBottomTabNavigator(
	{
		"Boost Spot": { screen: BoostSpotScreen },
		Home: { screen: HomeScreen },
		Love: { screen: LoveScreen },
		"My Deals": { screen: MyDealsScreen },
		Account: { screen: AccountScreen },
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) =>
				getTabBarIcon(navigation, focused, tintColor),
			tabBarLabel: ({ focused, tintColor }) =>
				getTabBarLabel(navigation, focused, tintColor),
			tabBarOnPress: ({navigation, defaultHandler}) => {
				getTabBarOnPress(navigation, defaultHandler)
			}
		}),
		tabBarOptions: {
			activeTintColor: '#EF3026',
			inactiveTintColor: 'gray',
			adaptive: true
		},
	}
);
