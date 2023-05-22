/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import Signup from './src/screens/signup/Signup';
import colors from './src/theme/theme';
import Login from './src/screens/Login/Login';


function App(): JSX.Element {
  

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.primary}/>
      <Login/>
    </View>
  )
}
export default App;
