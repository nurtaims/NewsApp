import React, { Component } from 'react'
import { connect } from 'react-redux'

import Holder from '../../../components/global/HolderComponent'
import NewsComponent from '../components/NewsComponent'

import {onNewsFetching} from '../actions/NewsAction'


class NewsContainer extends Component<{}>{
    componentDidMount(){
        this.props.on_news_fetching('game')
    }
    render(){
        console.log(this.props.newsReducer)
        return(
            <Holder isLoading={false}>
                <NewsComponent />
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