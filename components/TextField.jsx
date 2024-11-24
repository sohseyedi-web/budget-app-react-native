import { StyleSheet, TextInput } from 'react-native'
import { hp } from '../utils/common'

const TextField = ({ value, onChange, placeHolder, inputStyle, isMulti = false }) => {
    return (
        <TextInput
            style={[styles.input, inputStyle]}
            placeholder={placeHolder}
            value={value}
            placeholderTextColor={"#aaa"}
            onChangeText={onChange}
            multiline={isMulti}
        />
    )
}

export default TextField

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderColor: '#202020',
        borderWidth: 1,
        borderRadius: 18,
        paddingHorizontal: 10,
        backgroundColor: "#16161a",
        marginBottom: 10,
        fontSize: hp(2.5),
        color: "#fff",
    },
})