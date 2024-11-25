import { StyleSheet } from 'react-native'
import { useState } from 'react'
import { hp } from '../utils/common'
import ButtonAction from './ButtonAction'
import TextField from './TextField'
import { useTransaction } from '../hooks/useTransaction'
import SelectTypes from './SelectTypes'

const TransactionForm = ({ onClose }) => {

    const [amount, setAmount] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState("")
    const [selectedOption, setSelectedOption] = useState("income");
    const { loading, onSubmitTransaction } = useTransaction()

    const handleAddTransaction = () => {
        onSubmitTransaction(title, amount, description, selectedOption)
        onClose()
    }

    return (
        <>
            <TextField value={title} onChange={setTitle} placeHolder={"Title"} inputStyle={{ height: hp(6.6) }} />
            <TextField value={amount} onChange={setAmount} placeHolder={"Amount"} inputStyle={{ height: hp(6.6) }} />
            <SelectTypes select={selectedOption} setSelected={setSelectedOption} />
            <TextField value={description} onChange={setDescription} isMulti={true} placeHolder={"Description"} inputStyle={styles.textArea} />
            <ButtonAction title='Submit' onPress={handleAddTransaction} loading={loading} />
        </>
    )
}

export default TransactionForm

const styles = StyleSheet.create({
    textArea: {
        height: hp(18),
        paddingTop: 8
    }
})