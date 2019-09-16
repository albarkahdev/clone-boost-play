import React from 'react';
import { View, Text } from 'react-native';

import { text } from '../../_ui';

export const TitleHome = ({title, bold}) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <Text style={[text.XVI, bold && { fontWeight: "bold" }]}>{title}</Text>
        </View>
    );
};
