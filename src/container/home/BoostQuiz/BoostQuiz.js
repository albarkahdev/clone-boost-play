import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { TitleHome } from '../../../common';
import * as ImageAssets from '../../../_ui/_image/images';

const ListItemBoostQuiz = ({ item }) => {
    const { title, description, image } = item;
    return (
        <View style={{
            backgroundColor: 'white', width: 301, height: 200, borderRadius: 10, elevation: 5, marginBottom: 5, marginRight: 16,
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.1,
            shadowRadius: 15,
            marginLeft: item.id === 1 ? 16 : 0,
            position: "relative"
        }}>
            <View style={{ flex: 2 }}>
                <Image source={image} style={{ width: 301, height: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10, resizeMode: 'stretch' }} />
            </View>
            {
                item.id === 3 && (<View style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", position: "absolute", width: 301, height: "60%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", margin: 10 }}>BOOST QUIZ</Text>
                </View>)
            }
            <View style={{ flex: 1, alignItems: "flex-start", justifyContent: "space-around", padding: 10, paddingLeft: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
                <Text style={{ fontSize: 16 }}>{description}</Text>
            </View>
        </View>
    )
}

const dataQuiz = [
    {
        id: 1,
        title: "Family Time bagi Millenials",
        description: "Kamu termasuk tipe yang mana?",
        image: ImageAssets.fourhands
    },
    {
        id: 2,
        title: "Cari tau mana kopi favoritmu!",
        description: "Buktikan kalau kamu pecinta kopi!",
        image: ImageAssets.coffeehits
    },
    {
        id: 3,
        title: "Sepolos apa kamu saat SMA?",
        description: "Jangan ditutup-tutupin ya!",
        image: ImageAssets.sma
    },
]

const ListBoostQuiz = (props) => {
    return (
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={dataQuiz}
            horizontal
            renderItem={ListItemBoostQuiz}
        />
    );
}

export const BoostQuiz = (props) => {
    return (
        <View style={{ marginVertical: 30 }}>
            <View style={{ marginHorizontal: 16 }}>
                <TitleHome title={"BOOST QUIZ"} bold />
            </View>
            <ListBoostQuiz />
        </View>
    );
};
