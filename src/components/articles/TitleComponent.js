import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class TitleComponent extends Component{
    render(){
        var dateToView = ''
        var now = new Date()
        var posted = new Date(this.props.publishedAt) 
        var nowDate = now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate()
        var postedDate = posted.getFullYear()+"-"+posted.getMonth()+"-"+posted.getDate()
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        if(nowDate==postedDate){
            if(posted.getHours()==now.getHours()){
                dateToView+=(now.getMinutes()-posted.getMinutes())+" min ago."
            } else{
                dateToView += (now.getHours()-posted.getHours())+" hours ago."
            }
        }else{
            dateToView += monthNames[posted.getMonth()]+" "+posted.getDate()+", "+posted.getFullYear()
        }
        return(
            <View style={styles.container}>
                <Text style={[styles.title,{fontSize:this.props.fontSize}]}>{this.props.title}</Text>
                <View style={styles.dateView}>
                    <Text style={styles.date}>{dateToView}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: '4%'
    },
    title: {
        fontFamily: 'georgia',
        color: 'black',
        marginTop: '2%',
    },
    date: {
        fontFamily: 'georgia',
        color: '#808080',
        fontSize: 13
    },
    dateView:{
        marginTop: 10,
    }
})