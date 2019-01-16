import React, { Component } from 'react'
import { StyleSheet, View, Text, PixelRatio, TextInput } from 'react-native'

export default HeaderTitle = ()=>{
    return <View style={styles.headerTitle}>
        <Text style={styles.headerText}>NEWS</Text>
        <Text style={[styles.headerText,{color:'red',fontWeight:'500'}]}>APP</Text>
    </View>
}

const styles = StyleSheet.create({
    headerTitle: {
        flexDirection: 'row',
        paddingLeft: 10,
    },
    headerText:{
        fontFamily:'happyMonkey',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(10)
    },
})