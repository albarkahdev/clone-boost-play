import React from 'react';
import { View, Image } from 'react-native';

import { TitleHome } from '../../../components';

import { ImageAssets, getWidth, getHeight } from '../../../_ui';

const BoostTipsImage = (props) => {
    return (
        <View>
            <Image source={ImageAssets.coffeetips} style={{ width: getWidth(344), height: getHeight(200), borderRadius: 10, resizeMode: 'contain' }} />
        </View>
    )
};

export default BoostTipsNInfo = (props) => {
    return (
        <View style={{ marginHorizontal: 16, marginVertical: 30 }}>
            <TitleHome title={"BOOST TIPS & INFO"} bold />
            <TitleHome title={"Banyak tips dan info menarik disini!"} />
            <BoostTipsImage />
        </View>
    );
};
