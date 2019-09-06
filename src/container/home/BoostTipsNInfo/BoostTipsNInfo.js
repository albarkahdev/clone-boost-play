import React from 'react';
import { View, Image } from 'react-native';
import { TitleHome } from '../../../common';
import * as ImageAssets from '../../../_ui/_image/images';
import { getHeight, getWidth } from '../../../_ui/_measurement/measurements';

const BoostTipsImage = (props) => {
    return (
        <View>
            <Image source={ImageAssets.coffeetips} style={{ width: getWidth(344), height: getHeight(200), borderRadius: 10, resizeMode: 'contain' }} />
        </View>
    )
};

export const BoostTipsNInfo = (props) => {
    return (
        <View style={{ marginHorizontal: 16, marginVertical: 30 }}>
            <TitleHome title={"BOOST TIPS & INFO"} bold />
            <TitleHome title={"Banyak tips dan info menarik disini!"} />
            <BoostTipsImage />
        </View>
    );
};
