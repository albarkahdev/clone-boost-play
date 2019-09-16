import React from 'react';
import { Image, Text } from 'react-native';

import ButtonRipple from '../../../components/button/ButtonRipple';

import { text } from '../../../_ui';
import { getWidth, width } from '../../../_ui/_measurement/measurements';
import * as Icons from '../../../_ui/_icon/icons';

export default ListItemAccount = ({ imagename, title }) => {
    return (
        <ButtonRipple width={width} height={getWidth(50)} color="#7B797B" style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start", alignItems: "center", padding: 10, paddingLeft: 15 }}>
            <Image source={Icons[imagename]} style={{ width: getWidth(40), height: getWidth(40) }} resizeMode="contain" />
            <Text style={[text.XVIGray, { marginLeft: 10 }]}>{title}</Text>
        </ButtonRipple>
    );
};
