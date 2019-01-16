import React, { Component } from 'react'
import { connect } from 'react-redux'

import Holder from '../../../components/global/HolderComponent'
import ErrorComponent from '../../../components/status/ErrorComponent'
import EmptyComponent from '../../../components/status/EmptyComponent'
import NewsComponent from '../components/NewsComponent'
import HeaderTitle from '../components/HeaderTitle'
import HeaderSearch from '../components/HeaderSearch'

import {onNewsFetching} from '../actions/NewsAction'


class NewsContainer extends Component<{}>{
    static navigationOptions = ({ navigation }) => {
        return {
            headerStyle: {
                backgroundColor: 'white',
            },
            headerLeft: <HeaderTitle/>,
            headerRight: (
               <HeaderSearch
               onSearch = {navigation.getParam('_search_friends')}
               onClear = {navigation.getParam('_clear_firends')}
               />
            ),
        };
    };

    componentDidMount(){
        this.props.on_news_fetching('game')
        this.props.navigation.setParams({ 
            _search_friends: this._search_friends,
            _clear_firends: this._clear_firends ,
        });
    }

    _search_friends = (searchText)=>{
        this.props.on_news_fetching(searchText)
    }

    _clear_firends = ()=>{

    }


    render(){
        let {newsLoading, news, isError} = this.props.newsReducer
        let output = <NewsComponent news={news}/>
        if(!newsLoading && news.length === 0){
            output = <EmptyComponent/>
        }
        if(!newsLoading && isError){
            output = <ErrorComponent/>
        }

        console.log(this.props.newsReducer)
        return(
            <Holder isLoading={newsLoading}>
                {output}
            </Holder>
        )
    }
}

const mapStateToProps = state =>{
    return {
        newsReducer: state.NewsReducer,
    }
}
const mapDispatchToProps = dispatch => {
    return {
      on_news_fetching : async (text)=>{
          await dispatch(await onNewsFetching(text))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)