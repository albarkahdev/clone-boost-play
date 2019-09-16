import React from 'react';
import { SafeAreaView, View, Image, Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderBoost from '../../common/header/HeaderBoost';
import ScrollViewWithRefresh from '../../common/scroll/ScrollViewWithRefresh';
import * as ImageAssets from '../../_ui/_image/images';
import { width, getWidth, getHeight } from '../../_ui/_measurement/measurements';


const TemplateEmptyDeals = ({ title, description, highlightTitle, navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollViewWithRefresh>
                <View style={{ flex: 1, height: getHeight(600), justifyContent: "center", alignItems: "center" }}>
                    <View>
                        <Image source={ImageAssets.deal} style={{ width: getWidth(180), height: getHeight(150), resizeMode: "contain" }} />
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 10 }}>
                        <Text style={{ fontSize: 20, color: highlightTitle ? "black" : "#B0AEB0" }}>{title}</Text>
                        <Text style={{ fontSize: 16, color: "#B0AEB0", textAlign: "center", width: (width * 0.9) }}>{description}</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 10 }}>
                        <Text style={{ fontSize: 20, color: "#EF3026" }} onPress={() => navigation.navigate("Boost Spot")}>Kunjungi Boost Spot</Text>
                    </View>
                </View>
            </ScrollViewWithRefresh>
        </SafeAreaView>
    );
};

class GoOnDealsScreen extends React.Component {
    render() {
        return (
            <TemplateEmptyDeals
                title="Buat deals sekarang!"
                description="Kunjungi Boost Spot untuk mulai bermain."
                highlightTitle={true}
                {...this.props}
            />
        );
    }
}

class HistoryDealsScreen extends React.Component {
    render() {
        return (
            <TemplateEmptyDeals
                title="Jangan menyerah!"
                description="Terus mainkan untuk menyelesaikan penawaran ini."
                highlightTitle={false}
                {...this.props}
            />
        );
    }
}

const TabTop = createMaterialTopTabNavigator(
    {
        "BERLANGSUNG": GoOnDealsScreen, "RIWAYAT": HistoryDealsScreen
    },
    {
        swipeEnabled: false,
        tabBarOptions: {
            labelStyle: {
                fontWeight: "bold",
                color: "#626062",
            },
            indicatorStyle: {
                backgroundColor: '#D8D6D8',
            },
            style: {
                backgroundColor: '#F1EFF1',
            },
        }
    }
);

export default MyDealsStack = createStackNavigator(
    {
        "My Deals": TabTop
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return HeaderBoost({ right: "game" });
        }
    }
);
