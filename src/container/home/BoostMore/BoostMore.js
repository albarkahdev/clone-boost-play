import React from 'react';
import { View, Image, Text } from 'react-native';
import { TitleHome } from '../../../common';
import * as Icon from '../../../_ui/_icon/icons';

const CardItemBoostMore = ({title, icon, width, borderless}) => {
    return (
        <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 10 },  !borderless && {borderRightWidth: 1, borderRightColor: '#F8F6F8' }]}>
            <Image source={Icon[icon]} style={{ width: width || 35, height: 35, marginBottom: 10 }} />
            <Text style={{ fontSize: 13, color: "#807E80" }}>{title}</Text>
        </View>
    );
};

const CardBoostMore = (props) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 341, height: 87, borderRadius: 10, elevation: 5, 
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.13,
        shadowRadius: 15, justifyContent: 'space-around', alignItems: 'center' }}>
            <CardItemBoostMore title="Get Lucky" icon="reward" />
            <CardItemBoostMore title="Invite" icon="invite" width={45} />
            <CardItemBoostMore title="MediCall" icon="medicall" />
            <CardItemBoostMore title="BoostQuest" icon="boostquest" borderless />
        </View>
    );
};

export const BoostMore = (props) => {
    return (
        <View style={{ marginTop: 10, marginBottom: 16, marginHorizontal: 18 }}>
            <TitleHome title="BoostMore" />
            <CardBoostMore />
        </View>
    );
};
