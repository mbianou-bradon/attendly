import { Home, Profile } from '../../screens';
import colors from '../../theme/theme';
import Ionicons from "react-native-vector-icons/Ionicons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export type TabStackParams = {
    Home : undefined;
    Profile : undefined;
}

const Tab = createBottomTabNavigator<TabStackParams>();

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


export default TabNavigationRoute;