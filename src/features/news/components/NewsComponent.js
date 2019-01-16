import React, { Component } from 'react'
import { StyleSheet, View, Text, PixelRatio, ScrollView } from 'react-native'
import TitleComponent from '../../../components/articles/TitleComponent'

export default class NewsComponent extends Component<{}>{
    render(){
        let {news} = this.props 
        console.log(news[0])
        return(
            <ScrollView style={{backgroundColor:'#fff'}} style={styles.titleView}>
            {
                news.map((item,index) => (
                    <View key={index}>
                        <View style={styles.sourceView}>
                            <Text style={styles.source}>{item.source.name}</Text>
                        </View>
                        <TitleComponent 
                            title={item.title}
                            publishedAt={item.publishedAt}
                            fontSize={PixelRatio.getPixelSizeForLayoutSize(7)}
                        />
                    </View>
                ))
            }
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    titleView: {
        width:'95%',
        marginLeft:'2.5%',
        marginTop: "2%",
    },
    source: {
        fontFamily: 'georgia',
        color: 'green',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5)
    },
    sourceView:{
        marginTop: '2%'
    }
})