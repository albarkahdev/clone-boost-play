import React from 'react';
import { View, Image } from 'react-native';
import * as ImageAssets from '../../../_ui/_image/images';
import { getHeight, getWidth } from '../../../_ui/_measurement/measurements';

export const BoostPromo = (props) => {
    return (
        <View style={{ marginHorizontal: 16 }}>
            <Image source={ImageAssets.promozone} style={{ width: getWidth(344), height: getHeight(156), borderRadius: 10, resizeMode: 'contain' }} />
        </View>
    );
};
