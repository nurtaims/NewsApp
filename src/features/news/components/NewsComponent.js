import React, { Component } from 'react'
import { StyleSheet, View, Text, PixelRatio, ScrollView, TouchableOpacity } from 'react-native'
import TitleComponent from '../../../components/articles/TitleComponent'


function getColor(){
    let colors = ['#fe4a49','#005b96', '#ee4035','#7bc043']
    let index = Math.round(Math.random()*(colors.length - 1))
    return colors[index]
}

export default class NewsComponent extends Component<{}>{
    onClick = (index) => {
        this.props.navigation.navigate('detail', { 'news': this.props.news[index] })
    }
    render(){
        let {news} = this.props 
        return(
            <ScrollView style={{backgroundColor:'#fff'}}>
            <View style={styles.holder}>
            {
                news.map((item,index) => (
                    <View key={index}>
                        <View style={styles.sourceView}>
                            <Text style={[styles.source, {color: getColor(),}]}>{item.source.name.toUpperCase()}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.touchView}
                            onPress={()=>this.onClick(index)}
                        >
                            <TitleComponent
                                title={item.title}
                                publishedAt={item.publishedAt}
                                fontSize={20}
                                onClick = {this.onClick}
                            />
                        </TouchableOpacity>
                    </View>
                ))
            }
            </View>                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        width:'100%',
        padding:20,
    },
    touchView:{
        paddingTop: 10,
    },
    source: {
        fontFamily: 'georgia',
        fontSize: 11,
    },
    sourceView:{
        marginTop: 15,
    }
})