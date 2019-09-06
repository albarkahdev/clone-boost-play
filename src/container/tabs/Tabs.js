import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Platform, View, Image, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../home/home';
import * as Icon from '../../_ui/_icon/icons';

const TemplateScreen = ({ title }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>{title}!</Text>
		</View>
	);
}

class BoostStoreScreen extends React.Component {
	render() {
		return <TemplateScreen title="Boost Spot" />;
	}
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
	let IconComponent = Ionicons;
	let iconName;

	switch (routeName) {
		case "Home":
            return <AntDesign name="home" size={25} color={tintColor} />;
		case "BoostStore":
            return <MaterialIcons name="store" size={25} color={tintColor} />;
		case "Love":
			return <IconLove />;
		case "MyDeals":
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

export default createAppContainer(
	createBottomTabNavigator(
		{
			Home: { screen: HomeScreen },
			BoostStore: { screen: BoostStoreScreen },
			Love: { screen: LoveScreen },
			MyDeals: { screen: MyDealsScreen },
			Account: { screen: AccountScreen },
		},
		{
			defaultNavigationOptions: ({ navigation }) => ({
				tabBarIcon: ({ focused, tintColor }) =>
					getTabBarIcon(navigation, focused, tintColor),
				tabBarLabel: ({ focused, tintColor }) =>
					getTabBarLabel(navigation, focused, tintColor),
		
			}),
			tabBarOptions: {
				activeTintColor: '#EF3026',
				inactiveTintColor: 'gray',
				adaptive: true
			},
		}
	)
);
