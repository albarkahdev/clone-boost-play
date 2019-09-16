import React from 'react';
import { View, Text } from 'react-native';
import ListItemAccount from '../ListItemAccount/ListItemAccount';
import { HR } from '../../../common/line/hr';

export default Section = ({ data }) => {
    return (
        <React.Fragment>
            <View style={{ flex: 1, marginVertical: 10 }}>
                <View style={{ margin: 20, marginTop: 10, marginBottom: 25, }}>
                    <Text style={{ color: "#575557", fontSize: 18, fontWeight: "500" }}>{data.title}</Text>
                </View>
                <View>
                    {data.items.map((item, index) => <ListItemAccount key={index} imagename={item.imagename} title={item.title} />)}
                </View>
            </View>
            <HR full />
        </React.Fragment>
    );
};