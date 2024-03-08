// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroductionScreen from './SRC/Introduction/IntroductionScreen';
import Intro4 from './SRC/Introduction/intro4';
import Login from './SRC/Login/Login';
import LoginOtp from './SRC/Login/OTP/LoginwithOtp';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './SRC/redux/Store';
import EnterOtp from './SRC/Login/OTP/EnterOtp';
import SignUp from './SRC/Ragister';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    
      <Stack.Navigator initialRouteName="Introduction">
        <Stack.Screen name="Introduction" component={IntroductionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="intro4" component={Intro4} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="otpscreen" component={LoginOtp} options={{ headerShown: false }} />
        <Stack.Screen name="enterOtp" component={EnterOtp} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        {/* Add other screens to your stack */}
      </Stack.Navigator>
   
  );
};

const App = () => {
  return (
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
    
    <Auth/>
   </NavigationContainer>
    </PersistGate>
   </Provider>
  );
};



export default App;
