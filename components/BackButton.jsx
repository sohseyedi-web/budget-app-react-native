import { Pressable, StyleSheet } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useRouter } from "expo-router";
import { hp } from "../utils/common";

const BackButton = () => {
    const router = useRouter();

    return (
        <Pressable style={styles.btn} onPress={() => router.back()}>
            <ChevronLeftIcon size={"24"} color={"#252525"} />
        </Pressable>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    btn: {
        height: hp(6),
        width: hp(6),
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#c1c1c1"
    },
});
