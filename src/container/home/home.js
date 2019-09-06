import React from 'react';
import { SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import { BoostCashWithBackground } from './BoostCashWithBackground/BoostCashWithBackground';
import { BoostMore } from './BoostMore/BoostMore';
import { BoostBattleBanner } from './BoostBattleBanner/BoostBattleBanner';
import { BoostPromo } from './BoostPromo/BoostPromo';
import { BoostTipsNInfo } from './BoostTipsNInfo/BoostTipsNInfo';
import { BoostQuiz } from './BoostQuiz/BoostQuiz';
import { BoostBattle } from './BoostBattle/BoostBattle';
import { HR } from '../../common';


export default class HomeScreen extends React.Component {
    state = { refreshing: false }

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
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#EF3026" }}>
                <ScrollView
                    style={{ flex: 1, backgroundColor: "white" }}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    <BoostCashWithBackground />
                    <BoostMore />
                    <HR />
                    <BoostBattleBanner />
                    <HR />
                    <BoostPromo />
                    <HR />
                    <BoostTipsNInfo />
                    <HR />
                    <BoostQuiz />
                    <HR />
                    <BoostBattle />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
