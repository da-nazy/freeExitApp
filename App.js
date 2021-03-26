import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcomepage from './Components/Welcompage/Welcomepage.js';
import Login from './Components/login/Login.js';
import Register from './Components/register/Register.js';

const Stack=createStackNavigator();

export default function App() {
 
  return (
  <NavigationContainer>
   <Stack.Navigator>
     <Stack.Screen
     name="Welcomepage"
     component={Welcomepage}
     options={{title:'Welcome Page',headerShown:false}}
     />

     <Stack.Screen
     name="Login"
     component={Login}
    
     />
     
     <Stack.Screen
     name="Register"
     component={Register}
     />
   </Stack.Navigator>
  </NavigationContainer>
  );
}

