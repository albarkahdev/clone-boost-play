import React from 'react';
import { View } from 'react-native';
import ListItemAccount from '../ListItemAccount/ListItemAccount';

export default QRNStory = (props) => {
    return (
        <View style={{ flex: 1, marginVertical: 10 }}>
            <ListItemAccount imagename="qr" title="My QR" />
            <ListItemAccount imagename="mystory" title="My Story" />
        </View>
    );
};
