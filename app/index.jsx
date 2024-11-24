import ScreenProvider from "../components/ScreenProvider";
import HeaderApp from "../components/HeaderApp";
import { wp } from "../utils/common";
import { StyleSheet, View } from "react-native";
import AmonutRow from "../components/AmountRow";
import TransactionItem from "../components/TransactionItem";

export default function HomePage() {

    return (
        <ScreenProvider bg={"#141414"}>
            <View style={styles.container}>
                <HeaderApp />
                <AmonutRow />
                <View style={styles.content}>
                    <View style={{ flex: 1 }}>
                        <TransactionItem />
                    </View>
                </View>
            </View>
        </ScreenProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(4),
    },
    content: {
        flexDirection: 'row',
        justifyContent: "center",
    },
})