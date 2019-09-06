import React from 'react';
import { StyleSheet, FlatList, View, Image, Text } from 'react-native';
import * as ImageAssets from '../../../_ui/_image/images';
import * as Icon from '../../../_ui/_icon/icons';


const BoostBattleItem = ({ item }) => {
    const participant1 = item.participant[0];
    const participant2 = item.participant[1];
    return (
        <View style={[{ flexDirection: "row", marginHorizontal: 16, marginBottom: 16, position: "relative" }, item.id === 1 && { marginTop: 30 }]}>
            <Image source={Icon.boostbattle} style={{ position: "absolute", width: 50, height: 50, zIndex: 20, left: 148, top: 60 }} />
            <View style={[styles.imgWrapper, borderLeft]}>
                <Image source={participant1.image} style={[styles.img, borderLeft]} />
                <View style={[styles.imgOver, borderLeft, { borderRightWidth: 1.5, borderRightColor: "white" }]}>
                    <View style={{ backgroundColor: "rgba(36, 147, 150, 0.8)", width: 200, height: 200, borderRadius: 100, bottom: -85, left: -45, alignItems: "flex-end", justifyContent: "flex-start", paddingVertical: 35, paddingRight: 35 }}>
                        <View>
                            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>{item.title_battle}</Text>
                            <View style={{ paddingVertical: 5, padding: 5, borderRadius: 1, borderColor: "white", borderWidth: 1, alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>{participant1.title}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.imgWrapper, borderRight]}>
                <Image source={participant2.image} style={[styles.img, borderRight]} />
                <View style={[styles.imgOver, borderRight]}>
                    <View style={{ backgroundColor: "rgba(239, 48, 38, 0.8)", width: 200, height: 200, borderRadius: 100, bottom: -85, right: -45, alignItems: "flex-start", justifyContent: "flex-start", paddingVertical: 35, paddingLeft: 35 }}>
                        <Text style={{ color: "white", fontSize: 12, fontWeight: "bold", marginBottom: 10 }}>{item.title_battle}</Text>
                        <View style={{ paddingVertical: 5, padding: 5, borderRadius: 1, borderColor: "white", borderWidth: 1, alignItems: "center" }}>
                            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>{participant2.title}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

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

export const BoostBattle = (props) => {
    return (
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={dataBoostBattle}
            renderItem={BoostBattleItem}
        />
    );
};

const borderLeft = {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
};

const borderRight = {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 16
    },
    img: {
        width: "100%",
        height: 180,
        resizeMode: 'cover'
    },
    imgWrapper: {
        width: "50%",
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    imgOver: {
        width: "100%",
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'transparent'
    },
});
