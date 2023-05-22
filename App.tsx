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
import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



export type NativeStackParams = {
  "Sign Up" : undefined;
  Login : undefined;
  Main: undefined;
}

export type TabStackParams = {
  Home : undefined;
  Profile : undefined;
}

const Tab = createBottomTabNavigator<TabStackParams>();
const RootStack = createNativeStackNavigator<NativeStackParams>();

const TabNavigationRoute = () : JSX.Element => {

  return(
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}


function App(): JSX.Element {
  

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={colors.primary}/>
        <RootStack.Navigator screenOptions={{headerShown:false}}>
          <RootStack.Screen name='Login' component={Login} />
          <RootStack.Screen name='Sign Up' component={Signup} />
          <RootStack.Screen name='Main' component={TabNavigationRoute} />
        </RootStack.Navigator>
      </View>
    </NavigationContainer>
    
  )
}
export default App;
