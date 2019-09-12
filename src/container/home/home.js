import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import ScrollViewWithRefresh from '../../common/scroll/ScrollViewWithRefresh';
import BoostCashWithBackground from './BoostCashWithBackground/BoostCashWithBackground';
import BoostMore from './BoostMore/BoostMore';
import BoostBattleBanner from './BoostBattleBanner/BoostBattleBanner';
import BoostPromo from './BoostPromo/BoostPromo';
import BoostTipsNInfo from './BoostTipsNInfo/BoostTipsNInfo';
import BoostQuiz from './BoostQuiz/BoostQuiz';
import BoostBattle from './BoostBattle/BoostBattle';
import { HR } from '../../common';


export default class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, /* backgroundColor: "#EF3026" */ }}>
                <ScrollViewWithRefresh>
                    <BoostCashWithBackground />
                    <BoostMore {...this.props} />
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
                </ScrollViewWithRefresh>
            </SafeAreaView>
        );
    }
}
