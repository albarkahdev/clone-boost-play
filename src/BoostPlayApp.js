/**
 * boostPlay.js
 *
 * main app file
 *
 * @albarkahdev
 */


import React from 'react';
import SplashScreen from 'react-native-splash-screen';

import Routes from './_utils/routes';


export default class App extends React.Component {
	componentDidMount() {
		if (SplashScreen) {
			SplashScreen.hide();
		}
	}

	render() {
		return <Routes />;
	}
};
