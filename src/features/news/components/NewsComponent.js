import React, { Component } from 'react'
import { StyleSheet, View, Text, PixelRatio, TextInput } from 'react-native'
import { Constants } from 'expo'
import { Button } from 'react-native-elements'
import TitleComponent from '../../../components/articles/TitleComponent'
import Header from './HeaderComponent'

export default class NewsComponent extends Component<{}>{
    constructor(props){
        super(props)
        this.state = {
            visibleSearchBar: false,
            searchText: ''
        }
    }
    render(){
        return(
            <View style={{backgroundColor:'#fff'}}>
                <View style={{height:Constants.statusBarHeight, backgroundColor:'black'}}/>
                <Header />
                <View style={{alignItems:'center',width:'95%',marginLeft:'2.5%'}}>
                    <TitleComponent />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})