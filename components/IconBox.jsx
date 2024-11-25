import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { hp } from '../utils/common';
import { ArrowDownTrayIcon, ArrowUpTrayIcon, CircleStackIcon } from 'react-native-heroicons/outline';

const ICONS = {
    income: { icon: <ArrowDownTrayIcon size={24} color="#fff" />, color: "#4335A7" },
    expense: { icon: <ArrowUpTrayIcon size={24} color="#fff" />, color: "#D91656" },
    default: { icon: <CircleStackIcon size={24} color="#fff" />, color: "#141414" },
};

const IconBox = ({ type }) => {
    const { icon, color } = useMemo(() => ICONS[type] || ICONS.default, [type]);

    return (
        <View style={[styles.box, { backgroundColor: color }]}>
            {icon}
        </View>
    );
};

export default IconBox;

const styles = StyleSheet.create({
    box: {
        borderRadius: 18,
        height: hp(6),
        width: hp(6),
        justifyContent: "center",
        alignItems: "center"
    }
});
