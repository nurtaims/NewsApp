import * as types from '../../../util/types'

let initialState = {
    news: [],
    newsLoading: false,
    isError: false,
}

export default function NewsReducer(state = initialState, action){
    switch(action.type){
        case types.NEWS_PENDING: {
            return Object.assign({}, state, {
                newsLoading: true,
                isError: false
            })
        }
        case types.NEWS_FULFILLED: {
            return Object.assign({}, state, action.payload, {
                newsLoading: false,
            })
        }
    }
    return state
}