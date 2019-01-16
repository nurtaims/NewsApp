import React from 'react'
import StatusComponent from './StatusComponent'

export default emptyComponent = ()=>{
    return <StatusComponent
            imageSource = {require('../../../assets/image//not_found.png')}
            title = {'Sorry, nothing found...'}
            />
}