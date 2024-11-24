import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

const RadioInputGroup = ({ setSelectedOption, selectedOption }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.radioContainer}
                onPress={() => setSelectedOption('income')}
            >
                <View style={[styles.radioButton, selectedOption === 'income' && styles.radioButtonSelected]} />
                <Text style={styles.radioText}>Income</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.radioContainer}
                onPress={() => setSelectedOption('expense')}
            >
                <View style={[styles.radioButton, selectedOption === 'expense' && styles.radioButtonSelected]} />
                <Text style={styles.radioText}>Expense</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RadioInputGroup

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 8,
        width: "100%"
    },
    radioContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: "center"
    },
    radioButton: {
        height: 16,
        width: 16,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#73EC8B',
    },
    radioButtonSelected: {
        backgroundColor: '#73EC8B',
    },
    radioText: {
        marginLeft: 8,
        fontSize: 16,
        color: "#fff"
    },
});