import React from 'react';
import { View, Image } from 'react-native';
import * as ImageAssets from '../../../_ui/_image/images';

export const BoostPromo = (props) => {
    return (
        <View style={{ marginHorizontal: 16 }}>
            <Image source={ImageAssets.promozone} style={{ width: 344, height: 156, borderRadius: 10, resizeMode: 'contain' }} />
        </View>
    );
};
