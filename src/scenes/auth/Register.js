import React from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { compose } from "recompose";
import { Formik } from "formik";
import * as Yup from "yup";
import {
	handleTextInput,
	withNextInputAutoFocusForm,
	withNextInputAutoFocusInput
} from "react-native-formik";
import { TextField } from "react-native-material-textfield";

import { text, Icons, width, getHeight, getWidth } from '../../_ui';

const MyInput = compose(
	handleTextInput,
	withNextInputAutoFocusInput
)(TextField);
const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
	phone: Yup.number()
		.required("Nomor telepon tidak boleh kosong")
		.min(8, "Nomor telepon terlalu sedikit"),
	otp: Yup.string()
		.required("OTP tidak boleh kosong")
		.max(4, "Maximal 4 karakter"),
});


export default class RegisterScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: (
				<TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("Login")}>
					<MaterialIcons name="arrow-back" size={25} />
				</TouchableOpacity>
			),
		};
	};

	render() {
		const self = this;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ marginHorizontal: 16 }}>
					<Image source={Icons.boostplay} style={{ width: getWidth(150), height: getHeight(100), resizeMode: 'contain' }} />
					<Text style={text.XV}>Masukkan nomor telepon kamu dan verifikasi menggunakan kode OTP yang dikirimkan ke nomor kamu.</Text>
				</View>
				<Formik
					onSubmit={values => console.log(values)}
					validationSchema={validationSchema}
					render={props => {
						const isEmptyTextInput = props.values.phone && props.values.otp
						return (
							<Form style={{ marginHorizontal: 16 }}>
								<MyInput label="Masukan nomor telepon kamu" name="phone" type="phone" keyboardType="phone-pad" returnKeyType="next" baseColor="#747274" tintColor="#747274" />
								<View style={{ position: "relative" }}>
									<TouchableOpacity style={{ padding: 5, position: "absolute", top: -50, left: (width - 110), borderColor: "#EF3026", borderWidth: 1, borderRadius: 5 }} onPress={() => alert(`Kode OTP mu: ${Math.floor(Math.random() * 10000)}`)}>
										<Text style={text.XIIVRed}>Kirim OTP</Text>
									</TouchableOpacity>
								</View>
								<MyInput label="OTP" name="otp" type="name" baseColor="#747274" tintColor="#747274" />
								<TouchableOpacity style={{ padding: 15, backgroundColor: isEmptyTextInput ? "#EF3026" : "#9C9A9C", justifyContent: 'center', alignItems: 'center' }} onPress={props.handleSubmit}>
									<Text style={text.XIIVWhiteB}>VERIFIKASI</Text>
								</TouchableOpacity>
							</Form>
						);
					}}
				/>
			</SafeAreaView>
		);
	}
};
