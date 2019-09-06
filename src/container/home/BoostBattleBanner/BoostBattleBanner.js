import React from 'react';
import { View, Image } from 'react-native';
import * as ImageAssets from '../../../_ui/_image/images';

export const BoostBattleBanner = (props) => {
    return (
        <View style={{ marginHorizontal: 8, marginVertical: 27, }}>
            <Image source={ImageAssets.boostbattle} style={{ borderRadius: 10, width: 355, height: 146, resizeMode: "contain" }} />
        </View>
    )
};
