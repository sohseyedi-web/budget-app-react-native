import { StyleSheet, View } from 'react-native'
import { hp } from '../utils/common'
import { ArrowDownTrayIcon, ArrowUpTrayIcon, CircleStackIcon } from 'react-native-heroicons/outline';

const IconBox = ({ type }) => {

    const isType = type === "income" ? "#4335A7" : type === "expense" ? "#D91656" : "#141414";
    const icon =
        type === "income" ? <ArrowUpTrayIcon size={24} color={"#fff"} /> :
            type === "expense" ? <ArrowDownTrayIcon size={24} color={"#fff"} /> :
                <CircleStackIcon size={24} color={"#fff"} />;

    return (
        <View style={[styles.box, { backgroundColor: isType }]}>
            {icon}
        </View>
    )
}

export default IconBox

const styles = StyleSheet.create({
    box: {
        borderRadius: 18,
        height: hp(6),
        width: hp(6),
        justifyContent: "center",
        alignItems: "center"
    }
})