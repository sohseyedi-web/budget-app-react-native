import { Pressable, StyleSheet, Text, View } from 'react-native'
import { hp, wp } from '../utils/common'
import { useState } from 'react';
import ModalProvider from './ModalProvider';
import ButtonAction from './ButtonAction';
import TextField from './TextField';
import { useBudget } from '../context/BudgetProvider';
import { numberWithCommas } from './../utils/toPersianNumber';

const AmonutRow = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [inputText, setInputText] = useState('');
    const { balance, setInitialBalance } = useBudget()


    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const addBalanceValue = () => {
        setInitialBalance(Number(inputText))
        closeModal()
        setInputText("")
    }

    return (
        <View style={styles.amount}>
            <Text style={{ fontSize: hp(5.5), color: "#fff" }}>{numberWithCommas(balance)} {balance == 0 ? null : "$"}</Text>
            <Pressable style={styles.adding} onPress={openModal}>
                <Text style={styles.text}>Add Inventory</Text>
            </Pressable>
            <ModalProvider isModalVisible={isModalVisible} onClose={closeModal} title={"Deposit"}>
                <TextField value={inputText} onChange={setInputText} placeHolder={"Amount"} inputStyle={{ height: hp(6.6) }} />
                <ButtonAction title='Submit Inventory' onPress={addBalanceValue} />
            </ModalProvider>
        </View>
    )
}

export default AmonutRow

const styles = StyleSheet.create({
    amount: {
        paddingVertical: wp(7),
        justifyContent: "center",
        alignItems: 'center',
    },
    adding: {
        marginTop: 25,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        borderRadius: 18,
        backgroundColor: "#252525"
    },
    text: {
        fontSize: hp(2.4),
        fontWeight: "semibold",
        color: "#fff"
    },
})