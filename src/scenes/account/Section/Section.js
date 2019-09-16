import React from 'react';
import { View, Text } from 'react-native';

import ListItemAccount from '../ListItemAccount/ListItemAccount';
import { HR } from '../../../components/line/hr';

import { text } from '../../../_ui';

export default Section = ({ data }) => {
    return (
        <React.Fragment>
            <View style={{ flex: 1, marginVertical: 10 }}>
                <View style={{ margin: 20, marginTop: 10, marginBottom: 25, }}>
                    <Text style={text.XVIIIDarkGrayB}>{data.title}</Text>
                </View>
                <View>
                    {data.items.map((item, index) => <ListItemAccount key={index} imagename={item.imagename} title={item.title} />)}
                </View>
            </View>
            <HR full />
        </React.Fragment>
    );
};