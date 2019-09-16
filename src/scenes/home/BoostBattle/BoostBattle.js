import React from 'react';
import { FlatList } from 'react-native';
import * as ImageAssets from '../../../_ui/_image/images';
import { BoostBattleItem } from './BoostBattleItem';


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
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={dataBoostBattle}
            renderItem={({ item }) => <BoostBattleItem item={item} />}
        />
    );
};
