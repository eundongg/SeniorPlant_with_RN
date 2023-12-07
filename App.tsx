import React from 'react';
import LoginScreen from './Screen/LoginScreen';
// import RegisterScreen from './Screen/RegisterScreen';
import SplashScreen from './Screen/SplashScreen';
//import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
import HomeScreen from './Screen/drawerScreens/HomeScreen';
import SeniorListScreen from './Screen/drawerScreens/SeniorListScreen';
import SeniorFormScreen from'./Screen/drawerScreens/SeniorFormScreen';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
//require('dotenv').config();


const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name="SeniorList"
          component={SeniorListScreen}
          options={{ title: 'Senior List' }}
        />     
        <Stack.Screen
          name="SeniorForm"
          component={SeniorFormScreen}
          options={{title: "Form"}}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;