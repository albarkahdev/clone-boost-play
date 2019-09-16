import { StyleSheet } from 'react-native';

import colors from './color';
import colorScheme from './colorScheme';


const text = StyleSheet.create({
    b: {
        fontWeight: 'bold',
    },
    thin: {
        fontWeight: '100'
    },
    left: {
        textAlign: "left"
    },
    center: {
        textAlign: "center"
    },
    shadow: {
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: colors.black,
        shadowOpacity: 1
    },

    XXV: { fontSize: 25, color: colors.black },
    XX: { fontSize: 20, color: colors.black },
    XVI: { fontSize: 16, color: colors.black },
    XIV: { fontSize: 14, color: colors.black },
    XV: { fontSize: 15, color: colors.black },

    XXIIWhite: { fontSize: 22, color: colors.white },
    XXRed: { fontSize: 20, color: colorScheme.color1 },
    XVIGray: { fontSize: 16, color: colors.gray },
    XVIMidGray: { fontSize: 16, color: colors.midGray },
    XVIClay: { fontSize: 16, color: colors.clay },
    XVIWhite: { fontSize: 16, color: colors.white },
    XVWhite: { fontSize: 15, color: colors.white },
    XIVMidGray: { fontSize: 14, color: colors.midGray },
    XIVGray: { fontSize: 14, color: colors.gray },
    XIVWhite: { fontSize: 14, color: colors.white },
    XIIVRed: { fontSize: 13, color: colorScheme.color1 },
    XIIILightGray: { fontSize: 13, color: colors.lightGray },
    XIIVWhite: { fontSize: 13, color: colors.white },
    XIIWhite: { fontSize: 12, color: colors.white },

    XVIMidGrayCenter: { fontSize: 16, color: colors.midGray, textAlign: "center" },
    XVWhiteLeft: { fontSize: 15, color: colors.white, textAlign: "left" },

    XXB: { fontSize: 20, color: colors.black, fontWeight: "bold" },
    XVIB: { fontSize: 16, color: colors.black, fontWeight: "bold" },
    XVB: { fontSize: 15, color: colors.black, fontWeight: "bold" },
    XIVB: { fontSize: 14, color: colors.black, fontWeight: "bold" },

    XVIIIDarkGrayB: { fontSize: 18, color: colors.darkerGray, fontWeight: "bold" },
    XVIGrayB: { fontSize: 16, color: colors.gray, fontWeight: "bold" },
    XVIWhiteB: { fontSize: 16, color: colors.white, fontWeight: "bold" },
    XIIVRedB: { fontSize: 13, color: colorScheme.color1, fontWeight: "bold" },
    XIIVWhiteB: { fontSize: 13, color: colors.white, fontWeight: "bold" },
    XIIWhiteB: { fontSize: 12, color: colors.white, fontWeight: "bold" },
});

export default text;
