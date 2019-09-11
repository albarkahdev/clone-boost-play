import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { getWidth } from '../../../_ui/_measurement/measurements';
import * as Icons from '../../../_ui/_icon/icons';

const UserRewardsItem = ({ borderRight, value, name, imagename }) => {
    return (
        <TouchableOpacity style={[{ flex: 1, flexDirection: "row" }, borderRight && { borderRightWidth: 1, borderRightColor: '#F8F6F8' }]}>
            <View>
                <Image source={Icons[imagename]} style={{ height: getWidth(35) }} resizeMode="contain" />
            </View>
            <View>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{value}</Text>
                <Text style={{ fontSize: 13 }}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default UserRewards = (props) => {
    return (
        <View style={{ flexDirection: "row", marginVertical: 10, padding: 5, }}>
            <UserRewardsItem name="Kupon" value="0" imagename="coupon" borderRight />
            <UserRewardsItem name="Voucher" value="0" imagename="voucher" />
        </View>
    );
};
