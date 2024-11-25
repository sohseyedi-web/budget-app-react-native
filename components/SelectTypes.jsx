import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const SelectTypes = ({ setSelected, select }) => {
    return (
        <RNPickerSelect
            value={select}
            placeholder={{ label: "Select Category", value: null }}
            onValueChange={(value) => setSelected(value)}
            items={[
                { label: 'Income', value: 'income' },
                { label: 'Expense', value: 'expense' },
                { label: 'Deposit', value: 'deposit' },
            ]}
            style={{
                inputAndroid: styles.input,
                inputIOS: styles.input,
                placeholder: styles.placeholder,
            }}
        />
    );
};

export default SelectTypes;

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderColor: '#202020',
        borderWidth: 1,
        borderRadius: 18,
        paddingHorizontal: 10,
        backgroundColor: "#16161a",
        marginBottom: 10,
        fontSize: 16,
        color: "#fff",
    },
    placeholder: {
        color: '#aaa',
        fontSize: 16,
    },
});
