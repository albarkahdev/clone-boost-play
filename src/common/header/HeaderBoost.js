import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as ImageAssets from '../../_ui/_image/images';

export default HeaderBoost = ({ right }) => {
    return {
        headerLeft: (
            <View style={{ padding: 10, marginLeft: 10 }}>
                <Image source={ImageAssets.boost} style={{ width: 100, height: 50 }} resizeMode="contain" />
            </View>
        ),
        headerRight: right && (
            <TouchableOpacity style={{ padding: 10, marginRight: 15 }}>
                {
                    right === "map" ?
                    <SimpleLineIcons name="map" size={20} color="#EF3026" style={{ transform: [{ rotateX: "180deg" }] }} /> :
                    (
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <MaterialIcons name="videogame-asset" size={25} color="#EF3026" style={{ transform: [{ rotate: "-45deg" }] }} />
                            <Text style={{ marginLeft: 5, color: "#EF3026", fontWeight: "bold" }}>0</Text>
                        </View>
                    )
                }
            </TouchableOpacity>
        ),
    };
};