import React, { useState } from 'react';
import { StyleSheet, Alert, View, TouchableOpacity, Image, Text } from 'react-native';

import { text, Icons, getHeight, getWidth } from '../../../_ui';


const UIBoostBattleItem = ({ item, onVote }) => {
    const participant1 = item.participant[0];
    const participant2 = item.participant[1];
    return (
        <View style={[{ flexDirection: "row", marginHorizontal: 16, marginBottom: 16, position: "relative" }]}>
            <Image source={Icons.boostbattle} style={{ position: "absolute", width: 50, height: 50, zIndex: 20, left: getWidth(148), top: getHeight(60) }} />
            <TouchableOpacity style={[styles.imgWrapper, borderLeft]} onPress={() => onVote(0)}>
                <Image source={participant1.image} style={[styles.img, borderLeft]} />
                <View style={[styles.imgOver, borderLeft, { borderRightWidth: 1.5, borderRightColor: "white" }]}>
                    <View style={{ backgroundColor: "rgba(36, 147, 150, 0.8)", width: 200, height: 200, borderRadius: 100, bottom: -85, left: -45, alignItems: "flex-end", justifyContent: "flex-start", paddingVertical: 35, paddingRight: 35 }}>
                        <View>
                            <Text style={[text.XIIWhiteB, { marginBottom: 10 }]}>{item.title_battle}</Text>
                            <View style={{ paddingVertical: 5, padding: 5, borderRadius: 1, borderColor: "white", borderWidth: 1, alignItems: "center" }}>
                                <Text style={text.XIIWhiteB}>{participant1.title}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.imgWrapper, borderRight]} onPress={() => onVote(1)}>
                <Image source={participant2.image} style={[styles.img, borderRight]} />
                <View style={[styles.imgOver, borderRight]}>
                    <View style={{ backgroundColor: "rgba(239, 48, 38, 0.8)", width: 200, height: 200, borderRadius: 100, bottom: -85, right: -45, alignItems: "flex-start", justifyContent: "flex-start", paddingVertical: 35, paddingLeft: 35 }}>
                        <Text style={[text.XIIWhiteB, { marginBottom: 10 }]}>{item.title_battle}</Text>
                        <View style={{ paddingVertical: 5, padding: 5, borderRadius: 1, borderColor: "white", borderWidth: 1, alignItems: "center" }}>
                            <Text style={text.XIIWhiteB}>{participant2.title}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};


export const BoostBattleItem = ({ item }) => {
    const [vote, setVote] = useState(0);
    const onVote = (val) => {
        if (val === vote) {
            return Alert.alert(
                "Konfirmasi Tim",
                `Kamu memilih tim ${item.participant[val].title}`,
                [
                    { text: 'OK', onPress: () => console.log('Ask me later pressed') }
                ]
            );
        }
        return Alert.alert(
            "Konfirmasi Tim",
            "Kamu yakin untuk pindah tim? Jika memutuskan pindah tim makan skor lama kamu akan terhapus",
            [
                { text: 'BATAL' },
                { text: 'YAKIN', onPress: () => setVote(val) }
            ]
        );
    }
    return <UIBoostBattleItem item={item} onVote={onVote} />
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
