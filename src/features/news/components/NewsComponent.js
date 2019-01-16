import React, { Component } from 'react'
import { StyleSheet, View, Text, PixelRatio, ScrollView, TouchableOpacity } from 'react-native'
import TitleComponent from '../../../components/articles/TitleComponent'

export default class NewsComponent extends Component<{}>{
    render(){
        return(
            <ScrollView style={{backgroundColor:'#fff'}}>
                <TouchableOpacity
                    style={styles.titleView}
                    onPress={()=>console.log('News')}
                >
                    <View style={styles.sourceView}>
                        <Text style={styles.source}>The Guardian (AU)</Text>
                    </View>
                    <TitleComponent 
                        title='Spanish police arrest 182 people in raid on illegal cockfight'
                        publishedAt='2019-01-14T18:02:07Z'
                        fontSize={PixelRatio.getPixelSizeForLayoutSize(7)}
                    />
                </TouchableOpacity>
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