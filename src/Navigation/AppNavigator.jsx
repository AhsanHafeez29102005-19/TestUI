import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Register from '../Screens/Auth';
import Verify from '../Screens/Verify';
//import ForgotPasswordScreen from '../Screens/ForgetPass';
import ForgetPass from '../Screens/ForgetPass';
import Auth from '../Screens/Auth';
import Home from '../Screens/Home';
import EnableBiometricScreen from '../Screens/EnableBiometricScreen ';
import BiometricLogin from '../Screens/BiometricLogin';
import QrHome from '../Screens/QrHome';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Scanner from '../Screens/Scanner';
import Main from '../Screens/Main';
//Data is fethched from the redux, in case of the dynamic API , the store.js is also update
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPass"
          component={ForgetPass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnableBiometricScreen"
          component={EnableBiometricScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BiometricLogin"
          component={BiometricLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QrHome"
          component={QrHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Scanner"
          component={Scanner}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
