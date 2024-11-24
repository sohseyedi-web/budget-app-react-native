import { StyleSheet, View } from 'react-native'
import { hp } from '../utils/common'

const IconBox = ({ icon, type }) => {

    const isType = type === "income" ? "#4335A7" : "#D91656"

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