import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { View, Image, Text } from 'react-native';
import * as ImageAssets from '../../../_ui/_image/images';

const BackgroundHalfCircle = (props) => {
	return (
		<View style={{ backgroundColor: '#EF3026', width: 488, height: 253, borderBottomLeftRadius: 400, borderBottomRightRadius: 400, zIndex: -100, position: 'relative', top: -10, left: -60 }}>
			<View style={{ backgroundColor: 'rgba(255,255,255,0.2)', width: 488, height: 253, borderTopLeftRadius: 300, borderTopRightRadius: 300, position: 'absolute', top: 120, right: 0, left: 5 }} />
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
			<View style={{ height: 85, width: 85, justifyContent: 'center', alignItems: 'center' }}>
				<Image source={ImageAssets.handboost} style={{ width: 75, height: 75 }} />
			</View>
			<View style={{ width: 250, flexWrap: 'wrap' }}>
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
		<View style={{ backgroundColor: 'white', width: 341, height: 156, borderRadius: 10, elevation: 5, 
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

