// App.js

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import IntroductionScreen from '../SRC/Introduction/IntroductionScreen';
import Intro4 from '../SRC/Introduction/intro4';
import Login from '../SRC/Login/Login';
import LoginOtp from '../SRC/Login/OTP/LoginwithOtp';
import EnterOtp from '../SRC/Login/OTP/EnterOtp';
import SignUp from '../SRC/Ragister';
import ForgotePassword from '../SRC/ForgotPassword';
import ForgotOtp from '../SRC/ForgotOtp';
import HomeScreen from '../SRC/Home/Homescreen';
import ProfileScreen from '../SRC/Home/Profile';
import BotomTab from './BottomTab';
import NotificationScreen from '../SRC/Home/NotificationScreen';
import FineshedScreen from '../SRC/Home/FineshedBookScreen';
import BooksReadScreen from '../SRC/Home/BookReadScreen';
import CurranreadScreen from '../SRC/Home/CurrantlyReadBook';


const Stack = createStackNavigator();
const IntroductionStack = createStackNavigator();
const LoginScreenStack = createStackNavigator();
const SignUpScreenStack = createStackNavigator();
const HomeScreenStack = createStackNavigator();

const Introductions = ()=>{
    return(
        <IntroductionStack.Navigator>
            <IntroductionStack.Screen name="Introduction" component={IntroductionScreen} options={{ headerShown: false }} /> 
        <IntroductionStack.Screen name="intro4" component={Intro4} options={{ headerShown: false }} />

        </IntroductionStack.Navigator>

    )
}


const LoginScreen = ()=>{
    return(
        <LoginScreenStack.Navigator>
            <LoginScreenStack.Screen  name='loginm'  component={Login} options={{ headerShown: false }} />
            <LoginScreenStack.Screen name="otpscreen" component={LoginOtp} options={{ headerShown: false }} />
            <LoginScreenStack.Screen name="enterOtp" component={EnterOtp} options={{ headerShown: false }} />
            <LoginScreenStack.Screen name="ForgoatPassword" component={ForgotePassword} options={{ headerShown: false }} />
        <LoginScreenStack.Screen name="ForgoteOtp" component={ForgotOtp} options={{ headerShown: false }} />
        </LoginScreenStack.Navigator>
    )
}


const SignUpScreen = ()=>{
    return(
        <SignUpScreenStack.Navigator>
            <SignUpScreenStack.Screen  name="SignUps" component={SignUp} options={{ headerShown: false }} />
        </SignUpScreenStack.Navigator>

    )
}
const HomeScreens = ()=>{
    return(
        <HomeScreenStack.Navigator>
            <HomeScreenStack.Screen  name="Homes" component={BotomTab} options={{ headerShown: false }} />
            <HomeScreenStack.Screen  name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <HomeScreenStack.Screen  name="Notifications" component={NotificationScreen} options={{ headerShown: false }} />
            <HomeScreenStack.Screen  name="Fineshed" component={FineshedScreen} options={{ headerShown: false }} />
            <HomeScreenStack.Screen  name="booksread" component={BooksReadScreen} options={{ headerShown: false }} />
                <HomeScreenStack.Screen  name="Currantread" component={CurranreadScreen} options={{ headerShown: false }} />
        
        </HomeScreenStack.Navigator>

    )
}


const Auth = () => {
  return (
    
      <Stack.Navigator initialRouteName="Introduction1">
        <Stack.Screen name="Introduction1" component={Introductions} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreens} options={{ headerShown: false }} />
        
      </Stack.Navigator>
   
  );
};




export default Auth;
