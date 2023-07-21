import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigationRoute } from '..';
import { Login, Signup } from '../../screens';



export type NativeStackParams = {
    "Sign Up" : undefined;
    Login : undefined;
    Main: undefined;
}

const RootStack = createNativeStackNavigator<NativeStackParams>();

function RootStackNavigation(){

    return (
        <RootStack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
          <RootStack.Screen name='Login' component={Login} />
          <RootStack.Screen name='Sign Up' component={Signup} />
          <RootStack.Screen name='Main' component={TabNavigationRoute} />
        </RootStack.Navigator>
    )
}

export default RootStackNavigation;