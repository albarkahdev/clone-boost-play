import React from 'react';
import { View, Text } from 'react-native';

import VersionApps from '../../../components/version/versionapps';

import { text } from '../../../_ui';


export default VersionComp = (props) => {
    return (
        <View style={{ flex: 1, margin: 10, marginLeft: 20 }}>
            <Text style={text.XIIILightGray}>ver.<VersionApps /></Text>
        </View>
    );
};
