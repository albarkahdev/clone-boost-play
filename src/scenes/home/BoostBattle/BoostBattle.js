import React from 'react';
import { FlatList, View } from 'react-native';

import { TitleHome } from '../../../components';
import { BoostBattleItem } from './BoostBattleItem';

import { ImageAssets } from '../../../_ui';


const dataBoostBattle = [
    {
        id: 1,
        title_battle: "#TEAMMAKAN",
        participant: [
            {
                id: 1,
                title: "NASI UDUK",
                image: ImageAssets.nasiuduk
            },
            {
                id: 2,
                title: "NASI PADANG",
                image: ImageAssets.nasipadang
            },
        ]
    },
    {
        id: 2,
        title_battle: "#TEAMLIBURAN",
        participant: [
            {
                id: 1,
                title: "MALAYSIA",
                image: ImageAssets.malaysia
            },
            {
                id: 2,
                title: "SINGAPORE",
                image: ImageAssets.singapore
            },
        ]
    },
]

export default BoostBattle = (props) => {
    return (
        <View>
            <View style={{ marginHorizontal: 16, marginTop: 30 }}>
                <TitleHome title={"Boost Battle"} bold />
                <TitleHome title={"Pilih tim kamu dan dapatkan skor tertinggi"} />
            </View>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={dataBoostBattle}
                renderItem={({ item }) => <BoostBattleItem item={item} />}
            />
        </View>
    );
};
