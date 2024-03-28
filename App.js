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
import SignUp from './SRC/Register';
import { UserProvider } from './SRC/redux/UserDetail/userdetail';
import ForgotePassword from './SRC/ForgotPassword';
import ForgotOtp from './SRC/ForgotOtp';
import Auth from './Navigation/Auth';
import { StatusBar } from 'react-native'; // Import StatusBar component

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* Apply StatusBar component here */}
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
        <NavigationContainer>
          <Auth />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
