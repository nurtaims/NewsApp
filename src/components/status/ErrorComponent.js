import React from 'react'
import StatusComponent from './StatusComponent'

export default errorComponent = ()=>{
    return <StatusComponent
            imageSource = {require('../../../assets/image//error.png')}
            title = {'Woops, server error...'}
            />
}