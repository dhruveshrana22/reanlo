// IntroductionScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const IntroductionScreen = ({ navigation }) => {
  const [showIntroduction, setShowIntroduction] = useState(true);
  const loggedInUser = useSelector(state => state.loginReducer.loggedInUser);

  const checkIntroductionStatus = () => {
    if (loggedInUser) {
      setShowIntroduction(false);
    }
  };

  useEffect(() => {
    checkIntroductionStatus();

    const timer = setTimeout(() => {
      handleContinue();
    }, 2000);

    return () => clearTimeout(timer);
  }, [loggedInUser]);

  const handleContinue = () => {
    if (loggedInUser) {
      navigation.replace('Home');
    } else {
      navigation.replace('intro4');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../Image/Intro.png')} style={styles.image} />
      <Text>Welcome to the App!</Text>
      <Text>This is the introduction screen.</Text>
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});

export default IntroductionScreen;
