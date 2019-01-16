import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class DetailComponent extends Component{
    render(){
        let {news} = this.props
        return(
            <View>
                <Text>{news.title}</Text>
            </View>
        )
    }
}