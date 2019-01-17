import React, { Component } from 'react'
import { View, Text, StyleSheet, PixelRatio } from 'react-native'

export default class TitleComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={[styles.title,{fontSize:this.props.fontSize}]}>{this.props.title}</Text>
                <View style={styles.dateView}>
                    <Text style={styles.date}>Published at {this.props.publishedAt}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#C0C0C0',
        paddingBottom: '4%'
    },
    title: {
        fontFamily: 'georgia',
        color: 'black'
    },
    date: {
        fontFamily: 'georgia',
        color: '#808080',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5)
    },
    dateView:{
        marginTop: '2%'
    }
})