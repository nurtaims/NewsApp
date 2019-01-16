import React, { Component } from 'react'
import Holder from '../../../components/global/HolderComponent'
import NewsComponent from '../components/NewsComponent'

import { connect } from 'react-redux'

class NewsContainer extends Component{
    render(){
        return(
            <Holder isLoading={false}>
                <NewsComponent />
            </Holder>
        )
    }
}

export default NewsContainer