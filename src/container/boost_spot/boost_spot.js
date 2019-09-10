import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderBoost from '../../common/header/HeaderBoost';
import SearchBoostSpot from './search_boost_spot/SearchBoostSpot';
import ListBoostSpot from './list_boost_spot/ListBoostSpot';
import { HR } from '../../common/line/hr';
import { dataPilihanEditor, dataTerdekat } from './dummy/datadummy';


class BoostSpotScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return HeaderBoost({ right: "map" });
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <SearchBoostSpot />
                        <ListBoostSpot data={dataPilihanEditor} {...this.props} />
                        <HR full />
                        <ListBoostSpot data={dataTerdekat} marginTop={25} {...this.props} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default BoostSpotStack = createStackNavigator({ "Boost Spot": BoostSpotScreen });
