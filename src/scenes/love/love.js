/**
 * love_stack.js
 *
 * @albarkhdev
 */


import React from 'react';
import { SafeAreaView, Animated, Easing, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import ActionButton from '../../components/button/CircularActionButton/ActionButton';
import { getWidth } from '../../_ui';

import { Icons } from '../../_ui';


class LoveScreen extends React.Component {
    actionbuttonref = null;
    state = { isactive: false }

    componentDidMount() {
        this.timeout = setTimeout(() => {
            if (this.actionbuttonref) {
                this.animateButton()
            }
        }, 100);
    }

    animateButton() {
        Animated.spring(this.actionbuttonref.state.anim, {
            toValue: 1,
            duration: 250,
        }).start();
        this.actionbuttonref.setState({ active: true })
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
    }

    backToTabs = () => {
        this.props.navigation.navigate("Main");
    }

    render() {
        console.log({ isactive: this.state.isactive, actionbuttonref: this.actionbuttonref });
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <ActionButton active={this.state.isactive} buttonColor="rgba(231,76,60,1)" btnOutRange="rgba(239,48,38,1)" bgColor="rgba(41,14,16,1)"
                        OnInActivePress={this.backToTabs}
                        onOverlayPress={this.backToTabs}
                        ref={e => this.actionbuttonref = e}
                    >
                        <ActionButton.Item size={getWidth(70)} buttonColor="white" title="New Task" onPress={() => console.log("notes tapped!")}>
                            <Image source={Icons.money} style={{ height: getWidth(35) }} resizeMode="contain" />
                        </ActionButton.Item>
                        <ActionButton.Item size={getWidth(70)} buttonColor="white" title="Notifications" onPress={() => { }}>
                            <Image source={Icons.store} style={{ height: getWidth(45) }} resizeMode="contain" />
                        </ActionButton.Item>
                        <ActionButton.Item size={getWidth(70)} buttonColor="white" title="All Tasks" onPress={() => { }}>
                            <Image source={Icons.ticket} style={{ height: getWidth(30) }} resizeMode="contain" />
                        </ActionButton.Item>
                    </ActionButton>
                </View>
            </SafeAreaView>
        )
    }
}

export default LoveScreenStack = createStackNavigator({ "Love": LoveScreen }, {
    headerMode: 'none',
    transitionConfig: () => {
        return {
            transitionSpec: {
                duration: 0,
                timing: Animated.timing,
                easing: Easing.step0,
            }
        }
    },
});
