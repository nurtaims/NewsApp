import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

const win = Dimensions.get('window');
export const h = win.height;
export const w = win.width;

export default class DetailComponent extends Component{
    render(){
        let {news} = this.props
        console.log(news.urlToImage)
        return(
            <View>
                <View style={{flex: 1}}>
                    <Image
                        style={{width:w, height:h*.4}}
                        source={{uri: news.urlToImage}}
                    />
                </View>
                <View style={styles.container}>
                    <Text>wertyu</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:7,
        marginTop:h*.36,
    }
})