import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { hp } from '../utils/common'
import RadioInputGroup from './RadioInputGroup'
import ButtonAction from './ButtonAction'
import TextField from './TextField'
import { useBudget } from '../context/BudgetProvider'

const TransactionForm = ({ onClose }) => {

    const [amount, setAmount] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState("")
    const [selectedOption, setSelectedOption] = useState(null);
    const [loading, setLoading] = useState(false)
    const { handleTransactions } = useBudget()

    const handleAddTransaction = () => {
        setLoading(true)
        try {
            const newItem = {
                id: Math.ceil(Math.random() * 10000),
                data: {
                   title, amount, description, selectedOption
                },
                createdAt: new Date().toISOString(),
            }
            handleTransactions(newItem)
            onClose()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <>
            <TextField value={title} onChange={setTitle} placeHolder={"Title"} inputStyle={{ height: hp(6.6) }} />
            <TextField value={amount} onChange={setAmount} placeHolder={"Amount"} inputStyle={{ height: hp(6.6) }} />
            <RadioInputGroup selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
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