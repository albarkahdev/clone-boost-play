import React from 'react';
import { View } from 'react-native';
import { width, height } from '../..//_ui/_measurement/measurements';

console.log({ width, height });

export const HR = (props) => {
    return <View style={{ alignSelf: "center", width: (width - 36), backgroundColor: '#E0DEE0', height: 1 }} />;
}
