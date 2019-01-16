import React from 'react'
import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native'


type HolderProps = {
    isLoading: boolean,
    children?: any,
}

class Holder extends React.Component<HolderProps> {
    render(){
        return(
            <View style = {styles.holder}>
                {
                    this.props.isLoading 
                    ?   <View style = {styles.innerHolder}>
                            <ActivityIndicator size="large" color={'red'} />
                        </View>
                    :   this.props.children
                }
            </View>
        )
    }
}


export default  Holder;

const styles = StyleSheet.create({
    holder:{
        flex: 1,
        backgroundColor: 'white',
    },
    innerHolder: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})