import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Constants } from 'expo'

export default class NewsComponent extends Component{
    render(){
        return(
            <View>
                <View style={{height:Constants.statusBarHeight, backgroundColor:'black'}}/>
                <View style={styles.header}>
                    <View style={styles.headerTitle}>
                        <Text>NEWS</Text>
                        <Text style={{color:'red'}}>APP</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center'
    },
    headerTitle: {
        flexDirection: 'row'
    }
})