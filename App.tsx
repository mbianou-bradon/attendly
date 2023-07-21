import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import colors from './src/theme/theme';
import { RootStackNavigation } from './src/navigation';

function App(): JSX.Element {

  React.useEffect(()=>{
    SplashScreen.hide();

  },[])

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={colors.primary}/>
        <RootStackNavigation />
      </View>
    </NavigationContainer>
    
  )
}
export default App;
