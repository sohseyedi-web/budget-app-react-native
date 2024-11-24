import ScreenProvider from "../components/ScreenProvider";
import HeaderApp from "../components/HeaderApp";
import { hp, wp } from "../utils/common";
import { StyleSheet, Text, View } from "react-native";
import AmonutRow from "../components/AmountRow";
import TransactionItem from "../components/TransactionItem";

export default function HomePage() {

    return (
        <ScreenProvider bg={"#141414"}>
            <View style={styles.container}>
                <HeaderApp />
                <AmonutRow/>
                <View style={styles.content}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: hp(2.5), color: "#fff" }}>Transactions</Text>
                        <View style={{ rowGap: 5 }}>
                            <TransactionItem />
                        </View>
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