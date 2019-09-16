import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderBoost from '../../components/header/HeaderBoost';
import SearchBoostSpot from './SearchBoostSpot/SearchBoostSpot';
import ListBoostSpot from './ListBoostSpot/ListBoostSpot';
import { HR } from '../../components/line/hr';
import { dataPilihanEditor, dataTerdekat } from './_dummy/datadummy';


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
