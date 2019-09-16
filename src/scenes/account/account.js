import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import HeaderBoost from '../../components/header/HeaderBoost';
import ProfileAccount from './ProfileAccount/ProfileAccount';
import QRNStory from './QRNStroy/QRNStory';
import UserRewards from './UserRewards/UserRewards';
import FunZone from './FunZone/Funzone';
import Pengaturan from './Pengaturan/Pengaturan';
import VersionComp from './VersionComp/VersionComp';
import ScrollViewWithRefresh from '../../components/scroll/ScrollViewWithRefresh';
import { HR } from '../../components/line/hr';


class AccountScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return HeaderBoost({ right: false });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollViewWithRefresh>
                    <ProfileAccount />
                    <QRNStory />
                    <HR full />
                    <UserRewards />
                    <HR full />
                    <FunZone />
                    <Pengaturan />
                    <VersionComp />
                </ScrollViewWithRefresh>
            </SafeAreaView>
        )
    }
}

export default AccountStack = createStackNavigator({ "Account": AccountScreen });
