import React, { Component } from 'react'
import { StyleSheet, View, Text, PixelRatio, TextInput } from 'react-native'
import { Button } from 'react-native-elements'

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            visibleSearchBar: false,
            searchText: ''
        }
    }
    render(){
        return(
            <View style={styles.holder}>
               {
                this.state.visibleSearchBar ? 
                   <View style={styles.header}>
                       <View style={styles.searchInputView}>
                           <TextInput 
                               placeholder='Search'
                               style={styles.searchInput}
                               autoFocus={true}
                               onChangeText={(text)=>this.setState({searchText: text})}
                           />
                       </View>
                       <View style={styles.cancelView}>
                           <Button 
                               title='Cancel'
                               borderRadius={PixelRatio.getPixelSizeForLayoutSize(14)}
                               fontSize={PixelRatio.getPixelSizeForLayoutSize(9)}
                               backgroundColor='#fff'
                               color='black'
                               buttonStyle={styles.cancel_btn}
                               onPress={()=>this.setState({visibleSearchBar:false, searchText:''})}
                           />
                       </View>
                   </View>
               :
               <View style={styles.header}>
                   <View style={styles.headerTitle}>
                       <Text style={styles.headerText}>NEWS</Text>
                       <Text style={[styles.headerText,{color:'red',fontWeight:'500'}]}>APP</Text>
                   </View>
                   <View style={styles.search}>
                       <Button
                           title='Search'
                           buttonStyle={styles.search_btn}
                           borderRadius={PixelRatio.getPixelSizeForLayoutSize(14)}
                           fontSize={PixelRatio.getPixelSizeForLayoutSize(9)}
                           backgroundColor='#fff'
                           color='black'
                           onPress={()=>this.setState({visibleSearchBar:true})}
                       />
                   </View>
               </View>
               } 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    holder:{
    },
    header: {
        height: PixelRatio.getPixelSizeForLayoutSize(24),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#C0C0C0',
        flexDirection: 'row'
    },
    headerTitle: {
        flexDirection: 'row',
        marginLeft: PixelRatio.getPixelSizeForLayoutSize(60),
    },
    headerText:{
        fontFamily:'happyMonkey',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(12)
    },
    search_btn: {
        paddingVertical: PixelRatio.getPixelSizeForLayoutSize(1),
        paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(8),
        borderWidth: 1,
        borderColor:'#C0C0C0'
    },
    searchInputView: {
        width: '65%',
        paddingLeft: PixelRatio.getPixelSizeForLayoutSize(10)
    },
    cancelView: {
        width: '35%',
    },
    cancel_btn: {
        borderWidth: 1,
        borderColor: '#C0C0C0',
        paddingVertical: PixelRatio.getPixelSizeForLayoutSize(1.5),
        paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(4),
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(10),
        paddingLeft: 10,
        padding: 5,
    }
})