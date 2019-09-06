import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { View, Image, Text } from 'react-native';
import * as ImageAssets from '../../../_ui/_image/images';
import { getHeight, getWidth } from '../../../_ui/_measurement/measurements';

const BackgroundHalfCircle = (props) => {
	return (
		<View style={{ backgroundColor: '#EF3026', width: getWidth(488), height: getHeight(253), borderBottomLeftRadius: getHeight(400), borderBottomRightRadius: getHeight(400), zIndex: -100, position: 'relative', top: getHeight(-50), left: getWidth(-60) }}>
			<View style={{ backgroundColor: 'rgba(255,255,255,0.2)', width: getWidth(488), height: getHeight(253), borderTopLeftRadius: getHeight(300), borderTopRightRadius: getHeight(300), position: 'absolute', top: getHeight(110), left: getWidth(5) }} />
		</View>
	);
}

const WelcomeMessage = (props) => {
	return (
		<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
			<Text style={{ fontSize: 22, color: 'white' }}>Hello, Booster</Text>
			<Entypo name="mail" size={30} color={"white"} style={{ marginRight: 20}} />
		</View>
	);
}

const DescriptionActivationBoostCash = (props) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<View style={{ height: getHeight(85), width: getWidth(85), justifyContent: 'center', alignItems: 'center' }}>
				<Image source={ImageAssets.handboost} style={{ width: 75, height: 75 }} />
			</View>
			<View style={{ width: getWidth(250), flexWrap: 'wrap' }}>
				<View style={{ marginBottom: 10 }}>
					<Text style={{ fontSize: 18, color: '#747274' }}>Aktifkan BoostCash Kamu</Text>
				</View>
				<View>
					<Text style={{ fontSize: 14, color: '#A19FA1' }}>Verifikasi profil sekarang untuk mengaktifkan BoostCash by SpeedCash</Text>
				</View>
			</View>
		</View>
	)
}

const OptionsActivationBoostCash = (props) => {
	return (
		<View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginHorizontal: 20 }}>
			<Text style={{ fontSize: 15, color: '#339B99', marginRight: 10 }}>AKTIFKAN</Text>
			<Text style={{ fontSize: 15, color: '#339B99' }}>LIHAT SALDO</Text>
		</View>
	)
}

const CardActivationBoostCash = (props) => {
	return (
		<View style={{ backgroundColor: 'white', width: getWidth(341), height: getHeight(156), borderRadius: 10, elevation: 5, 
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

export const BoostCashWithBackground = (props) => {
	return (
		<View>
			<BackgroundHalfCircle />
			<BoostCash />
		</View>
	)
}

