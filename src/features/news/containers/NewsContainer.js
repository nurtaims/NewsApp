import React, { Component } from 'react'
import { connect } from 'react-redux'

import Holder from '../../../components/global/HolderComponent'
import ErrorComponent from '../../../components/status/ErrorComponent'
import EmptyComponent from '../../../components/status/EmptyComponent'
import NewsComponent from '../components/NewsComponent'
import HeaderComponent from '../components/HeaderComponent'

import {onNewsFetching} from '../actions/NewsAction'


class NewsContainer extends Component<{}>{
    componentDidMount(){
        this.props.on_news_fetching('game')
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
                <HeaderComponent />
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