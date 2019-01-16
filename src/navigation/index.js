import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import NewsContainer from '../features/news/containers/NewsContainer'

const switchNav = createSwitchNavigator(
    {
        news: NewsContainer
    },
    {
        initialRouteName: 'news'
    }
)

export default createAppContainer(switchNav)