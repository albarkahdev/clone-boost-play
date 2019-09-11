import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { getWidth, width } from '../../../_ui/_measurement/measurements';

export default Profile = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#EFEDEF" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end", padding: 15 }}>
                <TouchableOpacity>
                    <SimpleLineIcons name="pencil" size={15} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15 }}>
                <View style={{ flex: 1, backgroundColor: "#9C9A9C", width: getWidth(70), height: getWidth(70), borderRadius: getWidth(70), marginVertical: 10 }} />
                <Text style={{ marginVertical: 10, fontSize: 15, fontWeight: "bold", color: "black" }}>-</Text>
                <Text style={{ marginVertical: 10, fontSize: 15, color: "black" }}>example@gmail.com</Text>
            </View>
        </View>
    );
};
