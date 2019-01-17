import React, { Component } from 'react'
import { connect } from 'react-redux'

import Holder from '../../../components/global/HolderComponent'
import DetailComponent from '../components/DetailComponent'

class NewsContainer extends Component<{}>{
    static navigationOptions = {
        title: 'In detail',
    }
    render(){
        let news = this.props.navigation.getParam('news')
        return(
            <Holder isLoading={false}>
                <DetailComponent
                    news = {news}
                />
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