import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import TitleComponent from '../../../components/articles/TitleComponent'

export default class NewsComponent extends Component<{}>{
    render(){
        return(
            <View style={{backgroundColor:'#fff'}}>
                <View style={{alignItems:'center',width:'95%',marginLeft:'2.5%'}}>
                    <TitleComponent />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})