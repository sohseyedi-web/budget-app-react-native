import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp } from '../utils/common'

const Empty = () => {
    return (
        <View style={styles.empty}>
            <Text style={styles.text}>Nothing Transactions</Text>
        </View>
    )
}

export default Empty

const styles = StyleSheet.create({
    empty: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        minHeight:"80vh"
    },
    text:{
        fontSize:hp(2.2),
        fontWeight:"semibold",
        color:"#fefefe"
    }
})