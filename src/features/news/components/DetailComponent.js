import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, PixelRatio, ScrollView } from 'react-native'
import TitleComponent from '../../../components/articles/TitleComponent'

const win = Dimensions.get('window');
export const h = win.height;
export const w = win.width;

export default class DetailComponent extends Component{
    render(){
        let {news} = this.props
        return(
            <View>
                <View style={{flex: 1}}>
                    <Image
                        style={{width:w, height:h*.4}}
                        source={{uri: news.urlToImage}}
                    />
                </View>
                <View style={styles.container}>
                    <View style={styles.titleView}>
                        <TitleComponent
                            title={news.title}
                            publishedAt={news.publishedAt}
                            fontSize={PixelRatio.getPixelSizeForLayoutSize(9)}
                        />
                        <View style={{marginTop:'2%'}}>
                            <Text style={styles.content}>{news.content}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:7,
        marginTop:h*.36,
    },
    titleView: {
        width: w,
        height: h*.4,
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
        backgroundColor: 'white',
        paddingHorizontal: '5%',
        paddingVertical: '3%'
    },
    content:{
        fontFamily: 'georgia',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#808080'
    }
})