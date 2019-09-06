import React from 'react';
import { View, Text } from 'react-native';

export const TitleHome = ({title, bold}) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <Text style={[{ fontSize: 16 }, bold && { fontWeight: "bold" }]}>{title}</Text>
        </View>
    );
};
