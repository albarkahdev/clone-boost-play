import React from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HeaderBoost from '../../common/header/HeaderBoost';
import ScrollViewWithRefresh from '../../common/scroll/ScrollViewWithRefresh';
import ButtonRipple from './ButtonRipple';
import { getWidth, width } from '../../_ui/_measurement/measurements';
import { HR } from '../../common/line/hr';
import * as Icons from '../../_ui/_icon/icons';

const Profile = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#EFEDEF" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end", padding: 15 }}>
                <TouchableOpacity>
                    <SimpleLineIcons name="pencil" size={15} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 15 }}>
                <View style={{ flex: 1, backgroundColor: "#9C9A9C", width: getWidth(70), height: getWidth(70), borderRadius: getWidth(70), marginVertical: 10 }} />
                <Text style={{ marginVertical: 10, fontSize: 15, fontWeight: "bold", color: "black" }}>-</Text>
                <Text style={{ marginVertical: 10, fontSize: 15, color: "black" }}>example@gmail.com</Text>
            </View>
        </View>
    );
};

const ListItemAccount = ({ imagename, title }) => {
    return (
        <ButtonRipple width={width} height={getWidth(50)} color="#7B797B" style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", padding: 10, paddingLeft: 15 }}>
            <Image source={Icons[imagename]} style={{ width: getWidth(40), height: getWidth(40) }} resizeMode="contain" />
            <Text style={{ fontSize: 16, color: "#7B797B", marginLeft: 10 }}>{title}</Text>
        </ButtonRipple>
    );
};

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

const UserRewards = (props) => {
    return (
        <View style={{ flexDirection: "row", marginVertical: 10, padding: 5, }}>
            <UserRewardsItem name="Kupon" value="0" imagename="coupon" borderRight />
            <UserRewardsItem name="Voucher" value="0" imagename="voucher" />
        </View>
    );
};

const dataFunZone = {
    title: "Fun Zone",
    items: [
        {
            imagename: "boostquest",
            title: "Quests"
        },

        {
            imagename: "referral",
            title: "Kode Referral"
        },

        {
            imagename: "invite",
            title: "Udang Teman"
        }
    ]
};

const dataPengaturan = {
    title: "Pengaturan",
    items: [
        {
            imagename: "password",
            title: "Ganti Kata Sandi"
        },
        {
            imagename: "bahasa",
            title: "Bahasa"
        },
        {
            imagename: "faq",
            title: "FAQ"
        },
        {
            imagename: "exit",
            title: "Keluar"
        },
    ]
};

const Section = ({ data }) => {
    return (
        <React.Fragment>
            <View style={{ flex: 1, marginVertical: 10 }}>
                <View style={{ margin: 20, marginTop: 10, marginBottom: 25, }}>
                    <Text style={{ color: "#575557", fontSize: 18, fontWeight: "500" }}>{data.title}</Text>
                </View>
                <View>
                    { data.items.map((item, index) => <ListItemAccount key={index} imagename={item.imagename} title={item.title} />)}
                </View>
            </View>
            <HR full />
        </React.Fragment>
    );
};

class AccountScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return HeaderBoost({ right: false });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollViewWithRefresh>
                    <Profile />
                    <View style={{ flex: 1, marginVertical: 10 }}>
                        <ListItemAccount imagename="qr" title="My QR" />
                        <ListItemAccount imagename="mystory" title="My Story" />
                    </View>
                    <HR full />
                    <UserRewards />
                    <HR full />
                    <Section data={dataFunZone} />
                    <Section data={dataPengaturan} />
                </ScrollViewWithRefresh>
            </SafeAreaView>
        )
    }
}

export default AccountStack = createStackNavigator({ "Account": AccountScreen });
