import { Text, Pressable, StyleSheet, ActivityIndicator } from "react-native";
import { hp } from "../utils/common";

export default function ButtonAction({
    loading = false,
    title = "",
    buttonStyle,
    textStyle,
    onPress = () => { },
}) {
    return (
        <Pressable onPress={onPress} style={[buttonStyle, style.btn]}>
            {loading ? (
                <ActivityIndicator size={"large"} color={"#252525"} />
            ) : (
                <Text style={[textStyle, style.text]}>{title}</Text>
            )}
        </Pressable>
    );
}

const style = StyleSheet.create({
    btn: {
        borderRadius: 18,
        backgroundColor: "#73EC8B",
        justifyContent: "center",
        alignItems: "center",
        height: hp(6.6),
        borderCurve: "continuous",
        width: "100%"
    },
    text: {
        color: "#141414",
        fontSize: hp(2.5),
        fontWeight: "bold",
    },
});
