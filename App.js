import React from 'react'
// import Router from './src/navigation'
import  {Font} from 'expo'

//COMPONENT
import Holder from './src/components/global/HolderComponent'

//REDUX
import Reducers from './src/reducers'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middlewares = applyMiddleware(thunk)
const store = createStore(Reducers, middlewares)


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { fontLoaded: false }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'georgia': require('./assets/fonts/Georgia.ttf'),
      'regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'light': require('./assets/fonts/Montserrat-Light.ttf'),
      'italic': require('./assets/fonts/Ubuntu-Light-Italic.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render(){
    return(
      <Provider store = {store}>
        <Holder isLoading={!this.state.fontLoaded}>
          {/* <Router/> */}
        </Holder>
      </Provider>
    )
  }
}














// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
