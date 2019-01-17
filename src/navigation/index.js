import { createAppContainer, createStackNavigator } from 'react-navigation'
import NewsContainer from '../features/news/containers/NewsContainer'
import DetailsContainer from '../features/news/containers/DetailsContainer'

const switchNav = createStackNavigator(
    {
        news: NewsContainer,
        detail: DetailsContainer
    },
    {
        initialRouteName: 'news'
    }
)

export default createAppContainer(switchNav)