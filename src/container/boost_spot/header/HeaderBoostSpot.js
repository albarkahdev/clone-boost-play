import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import * as ImageAssets from '../../../_ui/_image/images';

export default HeaderBoostSpot = () => {
    return {
        headerLeft: (
            <View style={{ padding: 10, marginLeft: 10 }}>
                <Image source={ImageAssets.boost} style={{ width: 100, height: 50 }} resizeMode="contain" />
            </View>
        ),
        headerRight: (
            <TouchableOpacity style={{ padding: 10, marginRight: 15 }}>
                <SimpleLineIcons name="map" size={20} color="#EF3026" style={{ transform: [{ rotateX: "180deg" }] }} />
            </TouchableOpacity>
        ),
    };
};
