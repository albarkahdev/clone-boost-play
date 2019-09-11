import React, { PureComponent } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity, Animated, Easing, Platform } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        // margin: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class ButtonRipple extends PureComponent {
    constructor(props, context) {
        super(props, context);

        const maxOpacity = 0.12;

        this.state = {
            maxOpacity,
            scaleValue: new Animated.Value(0.01),
            opacityValue: new Animated.Value(maxOpacity),
        };

        this.renderRippleView = this.renderRippleView.bind(this);
        this.onPressedIn = this.onPressedIn.bind(this);
        this.onPressedOut = this.onPressedOut.bind(this);
    }
    onPressedIn() {
        Animated.timing(this.state.scaleValue, {
            toValue: 1,
            duration: 225,
            easing: Easing.bezier(0.0, 0.0, 0.2, 1),
            useNativeDriver: Platform.OS === 'android',
        }).start();
    }
    onPressedOut() {
        Animated.timing(this.state.opacityValue, {
            toValue: 0,
            useNativeDriver: Platform.OS === 'android',
        }).start(() => {
            this.state.scaleValue.setValue(0.01);
            this.state.opacityValue.setValue(this.state.maxOpacity);
        });
    }
    renderRippleView() {
        const { color, width, height, } = this.props;
        const { scaleValue, opacityValue } = this.state;

        // const rippleSize = size * 2;

        return (
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: width,
                    height: height,
                    // borderRadius: rippleSize / 2,
                    transform: [{ scale: scaleValue }],
                    opacity: opacityValue,
                    backgroundColor: color || 'black',
                }}
            />
        );
    }
    render() {
        const { width, height, style, onPress, children } = this.props;
        const iconContainer = { width: width, height: height };

        if (Platform.OS === 'ios') {
            return (
                <TouchableOpacity style={[styles.iconContainer, iconContainer, style]} onPress={() => onPress ? onPress() : null}>
                    {children}
                </TouchableOpacity>
            )
        }

        return (
            <TouchableWithoutFeedback onPress={() => onPress ? onPress() : null} onPressIn={this.onPressedIn} onPressOut={this.onPressedOut}>
                <View style={[styles.iconContainer, iconContainer, style]}>
                    {this.renderRippleView()}
                    {children}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default ButtonRipple;
