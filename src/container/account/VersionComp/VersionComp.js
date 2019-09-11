import React from 'react';
import { View, Text } from 'react-native';
import VersionApps from '../../../common/version/versionapps';


export default VersionComp = (props) => {
    return (
        <View style={{ flex: 1, margin: 10, marginLeft: 20 }}>
            <Text style={{ color: "#E0DEE0", fontSize: 13 }}>ver.<VersionApps /></Text>
        </View>
    );
};
