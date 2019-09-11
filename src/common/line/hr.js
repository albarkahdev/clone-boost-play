import React from 'react';
import { View } from 'react-native';
import { width } from '../../_ui/_measurement/measurements';


export const HR = (props) => {
    return <View style={{ alignSelf: "center", width: props.full ? width : (width - 36), backgroundColor: "#E0DEE0", height: 1 }} />;
}
