/**
 * AllListBoostSpot.js
 *
 *
 * ## Function
 * Show all list boost spot when user click "Lihat Semua"
 * 
 * ## PropTypes
 *  @param boostspots: object that contain properti title anda array data
 * 
 *
 * @albarkhdev
 */


import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { SafeAreaView, FlatList, View, TouchableOpacity, Image, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { HR } from '../../components/line/hr';

import { text, ImageAssets, getWidth, getHeight, colorScheme } from '../../_ui';

const ListBoostSpotItem = (props) => {
    const { item, index, lengthdata } = props;
    const { title, description } = item;
    const isLastItem = (lengthdata - 1) === index;
    return (
        <React.Fragment>
            <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ flex: 1 }}>
                    <Image source={ImageAssets.boostspot} style={{ width: getWidth(140), height: getHeight(140) }} />
                </View>
                <View style={{ flex: 1.3, justifyContent: "space-between", alignItems: "flex-start" }}>
                    <View>
                        <Text style={text.XIVB}>{title}</Text>
                        <Text style={text.XIV}>{description}</Text>
                    </View>
                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", backgroundColor: colorScheme.color1, padding: 13, width: "100%" }}>
                        <Text style={text.XIVWhite}>KUNJUNGI</Text>
                    </TouchableOpacity>
                </View>
            </View>
            { !isLastItem && <HR /> }
        </React.Fragment>
    );
};

class AllListBoostSpotScreen extends React.Component {
    state = { refreshing: false }

    static navigationOptions = ({ navigation }) => {
        const boostspots = navigation.getParam('boostspots', { title: "Boost Spots" });
        return {
            headerLeft: (
                <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("Boost Spot")}>
                    <MaterialIcons name="arrow-back" size={25} />
                </TouchableOpacity>
            ),
            title: boostspots.title
        };
    };

    _onRefresh = () => {
        this.setState({ refreshing: true });

        this.timeOutRefresh = setTimeout(() => {
            this.setState({ refreshing: false })
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timeOutRefresh) {
            clearTimeout(this.timeOutRefresh);
        }
    }

    render() {
        const boostspots = this.props.navigation.getParam('boostspots', { data: [] });
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={boostspots.data}
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                    renderItem={({ item, index }) => <ListBoostSpotItem item={item} index={index} lengthdata={boostspots.data.length} />}
                />
            </SafeAreaView>
        );
    }
}


export default AllListBoostSpotStack = createStackNavigator({ AllListBoostSpot: AllListBoostSpotScreen });
