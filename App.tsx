import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';

import colors from './src/theme/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons"
import SplashScreen from 'react-native-splash-screen';
import { Home, Login, Profile, Signup } from './src/screens';


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
    <Tab.Navigator initialRouteName='Home'

      screenOptions={({route})=> ({
        tabBarIcon : ({ size, focused, color}) => {
          let iconName : string = "";
          if(route.name === 'Home'){
            iconName = focused? "home" : "home-outline";
          }
          else if(route.name === "Profile"){
            iconName = focused? "person" : "person-outline"
          }

          return <Ionicons name={iconName} size={25} color={colors.primary} />
        },
        tabBarActiveTintColor : colors.primary,
        tabBarInactiveTintColor : colors.primary,
        tabBarStyle : {height : 60, paddingBottom:5}
      })}
    >
      <Tab.Screen name='Home' component={Home} options={{headerShown : false}}/>
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarLabel : 'Profile',
        title: "Student Profile",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor : colors.primary,
        headerTitleStyle : {
          color: colors.neutral_white
        }
      }}/>
    </Tab.Navigator>
  )
}


function App(): JSX.Element {

  React.useEffect(()=>{
    SplashScreen.hide();
    // client.get("/faculties")
    // .then((response)=>{
    //   const faculty = response.data.faculty
    //   AsyncStorage.setItem("@facultyList", JSON.stringify(faculty))
    // })
  },[])

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={colors.primary}/>
        <Login />
        <RootStack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
          <RootStack.Screen name='Login' component={Login} />
          <RootStack.Screen name='Sign Up' component={Signup} />
          <RootStack.Screen name='Main' component={TabNavigationRoute} />
        </RootStack.Navigator>
      </View>
    // </NavigationContainer>
    
  )
}
export default App;
