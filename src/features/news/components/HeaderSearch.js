import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'
import { FormInput, Icon } from 'react-native-elements'
const win = Dimensions.get('window');
const h = win.height;
const w = win.width;



export default class SearchFriend extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchText: '',
            isClearVisible: false,
        }
    }
    _search = (searchText)=>{
        this.setState({ searchText })
        if(searchText === '' && this.state.isClearVisible){
            this.setState({ isClearVisible: false })
        }

        if(searchText !== '' && !this.state.isClearVisible){
            this.setState({ isClearVisible: true })
        }
        this.props.onSearch(searchText)
    }
    _clear = ()=>{
        this.setState({
            searchText: '',
            isClearVisible: false,
        })
        this.searchInput.clearText()
        this.props.onClear()
    }
    render(){
        let { searchText, isClearVisible } = this.state
        return(
            <View style={styles.holder}>
                    <FormInput
                    placeholder="Поиск..."
                    containerStyle={styles.inpContStyle}
                    inputStyle = {styles.inputStyle}
                    placeholderTextColor = 'rgba(0,0,0,0.5)'
                    selectionColor = 'white'
                    autoFocus={false}
                    autoCapitalize='none'
                    autoCorrect={false}
                    blurOnSubmit={true}
                    ref={input => this.searchInput = input}
                    onSubmitEditing={() => console.log('search')}
                    onChangeText={this._search}
                    input = {searchText}
                    />
                    {
                        isClearVisible ?
                        <Icon
                        // raised
                        name='clear'
                        type='MaterialIcons'
                        color='rgba(0,0,0,0.5)'
                        underlayColor = 'rgba(255, 153, 59, 0.45)'
                        containerStyle = {styles.btnClear}
                        onPress={this._clear} />
                        :
                        null
                    }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        // backgroundColor: 'red',
        flexDirection: 'row'
    },
    inpContStyle: {
        // borderWidth: 1,
        // borderColor: 'white',
        width: w*.5,
        borderBottomWidth:0
    },
    inputStyle:{
        borderBottomColor: 'white',
    },
    btnClear: {
        padding: 5,
        paddingRight: 10,
        borderRadius: 50,
    }
})