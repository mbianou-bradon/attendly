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


function App(): JSX.Element {
  

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={colors.primary}/>
      <Signup/>
    </View>
  )
}
export default App;
