import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { View, Image, Text } from 'react-native';

import { text, ImageAssets, getHeight, getWidth } from '../../../_ui';

const BackgroundHalfCircle = (props) => {
	return (
		<View style={{ backgroundColor: '#EF3026', width: getWidth(488), height: getHeight(230), borderBottomLeftRadius: getHeight(400), borderBottomRightRadius: getHeight(400), zIndex: -100, position: 'relative', top: getHeight(-50), left: getWidth(-60) }}>
			<View style={{ backgroundColor: 'rgba(255,255,255,0.2)', width: getWidth(488), height: getHeight(253), borderTopLeftRadius: getHeight(300), borderTopRightRadius: getHeight(300), position: 'absolute', top: getHeight(110), left: getWidth(5) }} />
		</View>
	);
}

const WelcomeMessage = (props) => {
	return (
		<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
			<Text style={text.XXIIWhite}>Hello, Booster</Text>
			<Entypo name="mail" size={30} color={"white"} style={{ marginRight: 20 }} />
		</View>
	);
}

const DescriptionActivationBoostCash = (props) => {
	return (
		<View style={{ flex: 1, flexDirection: 'row' }}>
			<View style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
				<Image source={ImageAssets.handboost} style={{ width: getWidth(75), height: getWidth(75) }} />
			</View>
			<View style={{ paddingVertical: 10 }}>
				<View style={{ marginBottom: 5 }}>
					<Text style={text.XVIGray}>Aktifkan BoostCash Kamu</Text>
				</View>
				<View style={{ width: getWidth(250) }}>
					<Text style={text.XIVMidGray}>Verifikasi profil sekarang untuk mengaktifkan BoostCash by SpeedCash</Text>
				</View>
			</View>
		</View>
	)
}

const OptionsActivationBoostCash = (props) => {
	return (
		<View style={{ flex: 1, flexDirection: 'row', alignSelf: 'flex-end', marginHorizontal: 20 }}>
			<Text style={[text.XVIClay, { marginRight: 10 }]}>AKTIFKAN</Text>
			<Text style={text.XVIClay}>LIHAT SALDO</Text>
		</View>
	)
}

const CardActivationBoostCash = (props) => {
	return (
		<View style={{ backgroundColor: 'white', 
		flex: 1,
		borderRadius: 10, elevation: 5, 
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.13,
        shadowRadius: 15, justifyContent: 'space-around', alignItems: 'center', paddingVertical: 10 }}>
			<DescriptionActivationBoostCash />
			<OptionsActivationBoostCash />
		</View>
	)
}

const BoostCash = (props) => {
	return (
		<View style={{ flex: 1, marginTop: 37, marginHorizontal: 18, position: 'absolute' }}>
			<WelcomeMessage />
			<CardActivationBoostCash />
		</View>
	)
}

export default BoostCashWithBackground = (props) => {
	return (
		<View>
			<BackgroundHalfCircle />
			<BoostCash />
		</View>
	)
}

