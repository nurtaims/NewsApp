import * as types from '../../../util/types'
import Axios from 'axios'

//========FETCHING NEWS======
function onNewsFetchingPending(){
    return {
        type: types.NEWS_PENDING,
        payload: null
    }
}

function onNewsFetchingFulfilled(obj){
    return {
        type: types.NEWS_FULFILLED,
        payload: obj
    }
}

export async function onNewsFetching(text = 'kz'){
    return async (dispatch, getState)=>{
        dispatch(onNewsFetchingPending())
        let URL = "https://newsapi.org/v2/everything?q=sport&apiKey=5518d5c0108843e8b0efa99e385e8c91"
        let news_obj = {
            news: [],
            newsLoading: false,
            isError: false,
        }
        try{
            let result = await Axios.get(URL)
            console.log('ACTION_NEWS_SUCCESS',result.data)
            news_obj.news = result.data.articles
        }catch(error){
            console.log('ACTION_NEWS_ERROR', error)
            news_obj.isError = true
        }

        dispatch(onNewsFetchingFulfilled(news_obj))
    }
}