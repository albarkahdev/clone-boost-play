import React from 'react';
import { View, Image } from 'react-native';

import { ImageAssets, getWidth, getHeight } from '../../../_ui';

export default BoostBattleBanner = (props) => {
    return (
        <View style={{ marginHorizontal: 8, marginVertical: 27, }}>
            <Image source={ImageAssets.boostbattle} style={{ borderRadius: 10, width: getWidth(355), height: getHeight(146), resizeMode: "contain" }} />
        </View>
    )
};
