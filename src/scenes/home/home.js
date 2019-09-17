/**
 * home_screen.js
 *
 * @albarkhdev
 */


import React from 'react';
import { SafeAreaView } from 'react-native';
import ScrollViewWithRefresh from '../../components/scroll/ScrollViewWithRefresh';
import BoostCashWithBackground from './BoostCashWithBackground/BoostCashWithBackground';
import BoostMore from './BoostMore/BoostMore';
import BoostBattleBanner from './BoostBattleBanner/BoostBattleBanner';
import BoostPromo from './BoostPromo/BoostPromo';
import BoostTipsNInfo from './BoostTipsNInfo/BoostTipsNInfo';
import BoostQuiz from './BoostQuiz/BoostQuiz';
import BoostBattle from './BoostBattle/BoostBattle';

import { HR } from '../../components';


export default class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
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
