import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import { TitleHome } from '../../../components';

import { text, Icons, getHeight, getWidth } from '../../../_ui';

const CardItemBoostMore = ({title, onPress, icon, width, borderless}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 10 },  !borderless && {borderRightWidth: 1, borderRightColor: '#F8F6F8' }]}>
            <Image source={Icons[icon]} style={{ width: getWidth(width) || getWidth(33), height: getWidth(33), marginBottom: getHeight(10) }} />
            <Text style={text.XIVMidGray}>{title}</Text>
        </TouchableOpacity>
    );
};

const CardBoostMore = (props) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: 'white', width: getWidth(341), height: getHeight(87), borderRadius: 10, elevation: 5, 
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.13,
        shadowRadius: 15, justifyContent: 'space-around', alignItems: 'center' }}>
            <CardItemBoostMore title="Get Lucky" icon="reward" onPress={() => props.navigation.navigate("Boost Spot")} />
            <CardItemBoostMore title="Invite" icon="invite" width={45} />
            <CardItemBoostMore title="MediCall" icon="medicall" />
            <CardItemBoostMore title="BoostQuest" icon="boostquest" borderless />
        </View>
    );
};

export default BoostMore = (props) => {
    return (
        <View style={{ marginBottom: 16, marginHorizontal: 18 }}>
            <TitleHome title="BoostMore" />
            <CardBoostMore {...props} />
        </View>
    );
};
