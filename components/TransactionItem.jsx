import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import IconBox from './IconBox';
import { hp, wp } from '../utils/common';
import { useBudget } from '../context/BudgetProvider';
import { numberWithCommas } from '../utils/toPersianNumber';
import { convertDate } from '../utils/convertDate';
import Empty from './Empty';
import Animated, { FadeIn, Layout } from 'react-native-reanimated';

const TransactionItem = () => {
    const { transaction } = useBudget();
    const sortTransactions = transaction?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <View style={{ rowGap: 5 }}>
            <FlatList
                ListHeaderComponent={
                    transaction.length > 0 && (
                        <Text style={{ fontSize: hp(2.5), color: '#fff' }}>Transactions</Text>
                    )
                }
                data={sortTransactions}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 8 }}
                ListEmptyComponent={<Empty />}
                renderItem={({ item }) => (
                    <Animated.View
                        entering={FadeIn.delay(200).duration(500)}
                        layout={Layout.springify()}
                        style={styles.list}
                    >
                        <IconBox type={item.data.selectedOption} />
                        <View style={styles.row}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text
                                    style={{
                                        fontSize: hp(2.2),
                                        color: '#fff',
                                        fontWeight: 'semibold',
                                    }}
                                >
                                    {item.data.title}
                                </Text>
                                <Text style={{ color: '#fff' }}>
                                    {numberWithCommas(item.data.amount)} $
                                </Text>
                            </View>
                            <Text style={{ opacity: 0.5, color: '#fff', fontSize: hp(1.6) }}>
                                {convertDate(item.createdAt)}
                            </Text>
                        </View>
                    </Animated.View>
                )}
            />
        </View>
    );
};

export default TransactionItem;

const styles = StyleSheet.create({
    list: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 12,
        borderRadius: 18,
        backgroundColor: '#252525',
        height: 60,
        padding: wp(3),
    },
    row: {
        flex: 1,
        gap: 4,
    },
});
