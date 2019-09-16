import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { compose } from "recompose";
import { Formik } from "formik";
import * as Yup from "yup";
import {
	handleTextInput,
	withNextInputAutoFocusForm,
	withNextInputAutoFocusInput
} from "react-native-formik";
import { TextField } from "react-native-material-textfield";

import { width } from '../../_ui/_measurement/measurements';
import { text } from '../../_ui'

const MyInput = compose(
	handleTextInput,
	withNextInputAutoFocusInput
)(TextField);
const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
	phone: Yup.number()
		.required("Nomor telepon tidak boleh kosong")
		.min(8, "Nomor telepon terlalu sedikit"),
	// .max(15, "Maximal 15 karakter"),
	password: Yup.string()
		.required("Password tidak boleh kosong")
		.min(2, "Cukup yakin ini akan diretas")
		.max(15, "Maximal 15 karakter"),
});


export default class LoginScreen extends React.Component {
	state = { showpassword: false }

	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: (
				<TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("Main")}>
					<MaterialIcons name="arrow-back" size={25} />
				</TouchableOpacity>
			),
			headerRight: (
				<TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("Register")}>
					<Text style={text.XVIGray}>DAFTAR</Text>
				</TouchableOpacity>
			),
		};
	};

	setShowPassword = (self) => {
		self.setState({ showpassword: !self.state.showpassword });
	}

	render() {
		const self = this;
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Formik
					onSubmit={values => console.log(values)}
					validationSchema={validationSchema}
					render={props => {
						return (
							<Form style={{ marginHorizontal: 16 }}>
								<View style={{ alignItems: "center", marginBottom: 10, marginTop: 80 }}>
									<Text style={text.XXV}>MASUK</Text>
								</View>
								<MyInput label="Masukan nomor telepon kamu" name="phone" type="phone" keyboardType="phone-pad" returnKeyType="next" baseColor="#747274" tintColor="#747274" />
								<MyInput label="Masukan password" name="password" type={self.state.showpassword ? "name" : "password"} baseColor="#747274" tintColor="#747274" />
								<View style={{ position: "relative" }}>
									<TouchableOpacity style={{ padding: 10, position: "absolute", top: -50, left: (width - 70) }} onPress={() => self.setShowPassword(self)}>
										<Octicons name={self.state.showpassword ? "eye" : "eye-closed"} size={20} color="#747274" />
									</TouchableOpacity>
								</View>
								<View style={{ alignItems: "flex-end", marginBottom: 50, marginTop: 30 }}>
									<Text style={text.XVIGray} onPress={() => alert("Lupa password kamu?")}>Lupa password kamu?</Text>
								</View>
								<TouchableOpacity style={{ padding: 15, borderColor: "#EF3026", borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} onPress={props.handleSubmit}>
									<Text style={text.XIIVRedB}>MASUK</Text>
								</TouchableOpacity>
							</Form>
						);
					}}
				/>
			</SafeAreaView>
		);
	}
};
