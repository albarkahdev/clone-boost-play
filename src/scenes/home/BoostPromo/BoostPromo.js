import React from 'react';
import { View, Image } from 'react-native';

import { ImageAssets, getWidth, getHeight } from '../../../_ui';

export default BoostPromo = (props) => {
    return (
        <View style={{ marginHorizontal: 16 }}>
            <Image source={ImageAssets.promozone} style={{ width: getWidth(344), height: getHeight(156), borderRadius: 10, resizeMode: 'contain' }} />
        </View>
    );
};
