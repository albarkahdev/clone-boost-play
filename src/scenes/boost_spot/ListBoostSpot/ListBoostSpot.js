import React from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { text, Icons, ImageAssets, getWidth, getHeight } from '../../../_ui';

const BoostSpotItem = (props) => {
    const { item, index, lengthdata } = props;
    const { title, description, star } = item;
    const isLastItem = (lengthdata - 1) === index;
    return (
        <TouchableOpacity style={{ width: getWidth(160), marginRight: isLastItem ? 0 : 25 }}>
            <View style={styles.imgWrapper}>
                <Image source={ImageAssets.boostspot} style={styles.img} />
                <View style={styles.imgOver}>
                    <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 0, y: 1 }} colors={['rgba(250, 248, 250, 0)', 'rgba(0, 0, 0, 0.8)']} style={{ width: getWidth(160), height: getHeight(150), alignItems: "flex-start", justifyContent: "space-between", flexDirection: star ? "column" : "column-reverse", padding: 10, paddingLeft: 5, paddingBottom: 10 }}>
                        {star && <Image source={Icons.rate} style={{ width: 35, height: 35 }} />}
                        <Text style={text.XVWhiteLeft}>{description}</Text>
                    </LinearGradient>
                </View>
            </View>
            <View style={{ marginTop: 5, flexWrap: "nowrap", width: getWidth(160) }}>
                <Text style={text.XVB}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default BoostSpotCard = (props) => {
    const { title, data } = props.data
    return (
        <View style={{ marginHorizontal: 16, marginVertical: 10, marginTop: props.marginTop }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
                <Text style={text.XXB}>{title}</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("AllListBoostSpot", { boostspots: props.data })}>
                    <Text style={text.XVIB}>Lihat semua ></Text>
                </TouchableOpacity>
            </View>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                horizontal
                data={data}
                renderItem={({ item, index }) => <BoostSpotItem item={item} index={index} lengthdata={data.length} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: getWidth(160),
        height: getHeight(160),
        resizeMode: 'contain'
    },
    imgWrapper: {
        width: getWidth(160),
        height: getHeight(150),
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    imgOver: {
        width: getWidth(150),
        height: getHeight(150),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },
});