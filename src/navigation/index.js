import { createAppContainer, createStackNavigator } from 'react-navigation'
import NewsContainer from '../features/news/containers/NewsContainer'

const switchNav = createStackNavigator(
    {
        news: NewsContainer
    },
    {
        initialRouteName: 'news'
    }
)

export default createAppContainer(switchNav)