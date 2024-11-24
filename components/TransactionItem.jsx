import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ArrowsRightLeftIcon } from 'react-native-heroicons/outline'
import IconBox from './IconBox'
import { hp, wp } from '../utils/common'
import { useBudget } from '../context/BudgetProvider'
import { numberWithCommas } from '../utils/toPersianNumber'
import { convertDate } from '../utils/convertDate'

const TransactionItem = () => {

    const { transaction } = useBudget()

    return (
        <FlatList
            data={transaction}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 8 }}
            ListEmptyComponent={<Text>nothing</Text>}
            renderItem={({ item }) => (
                <View style={styles.list}>
                    <IconBox icon={<ArrowsRightLeftIcon size={24} color="#fff" />} type={item.data.selectedOption} />
                    <View style={styles.row}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: hp(2.2), color: "#fff", fontWeight: "semibold" }}>{item.data.title}</Text>
                            <Text style={{ color: "#fff" }}>{numberWithCommas(item.data.amount)} $</Text>
                        </View>
                        <Text style={{ opacity: .5, color: "#fff", fontSize: hp(1.6) }}>{convertDate(item.createdAt)}</Text>
                    </View>
                </View>
            )}
        />
    )
}

export default TransactionItem

const styles = StyleSheet.create({
    list: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: "center",
        columnGap: 12,
        borderRadius: 18,
        backgroundColor: "#252525",
        height: 60,
        padding: wp(3)
    },
    row: {
        flex: 1,
        gap: 4
    }
})