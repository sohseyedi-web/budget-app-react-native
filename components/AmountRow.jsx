import { StyleSheet, Text, View } from 'react-native'
import { hp, wp } from '../utils/common'
import { useBudget } from '../context/BudgetProvider';
import { numberWithCommas } from './../utils/toPersianNumber';

const AmonutRow = () => {

    const { balance } = useBudget()

    return (
        balance == 0 ? null : (
            <View style={styles.amount}>
                <Text style={{ fontSize: hp(5.5), color: "#fff" }}>Inventory : {numberWithCommas(balance)} {balance == 0 ? null : "$"}</Text>
            </View>
        )
    )
}

export default AmonutRow

const styles = StyleSheet.create({
    amount: {
        paddingVertical: wp(4),
        justifyContent: "center",
        alignItems: 'center',
    },
})