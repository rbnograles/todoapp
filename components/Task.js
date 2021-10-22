import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Task = ({taskName}) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                 <Text style={styles.itemText}>{taskName}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: "80%"
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 5
    }
})