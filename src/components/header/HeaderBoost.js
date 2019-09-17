import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { text, ImageAssets, colorScheme } from '../../_ui';

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
                    <SimpleLineIcons name="map" size={20} color={colorScheme.color1} style={{ transform: [{ rotateX: "180deg" }] }} /> :
                    (
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <MaterialIcons name="videogame-asset" size={25} color={colorScheme.color1} style={{ transform: [{ rotate: "-45deg" }] }} />
                            <Text style={[text.XIIVRedB, { marginLeft: 5 }]}>0</Text>
                        </View>
                    )
                }
            </TouchableOpacity>
        ),
    };
};
