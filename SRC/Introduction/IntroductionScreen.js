// IntroductionScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const IntroductionScreen = ({ navigation }) => {
  const [showIntroduction, setShowIntroduction] = useState(true);

  useEffect(() => {
    // Check AsyncStorage to see if the introduction screen has been shown
    const checkIntroductionStatus = async () => {
    //   try {
    //     const value = await AsyncStorage.getItem('@introduction_shown');
    //     if (value !== null) {
    //       // If the value exists, it means the introduction screen has been shown before
    //       setShowIntroduction(false);
    //     }
    //   } catch (error) {
    //     console.error('Error reading introduction status from AsyncStorage:', error);
    //   }
    };

    checkIntroductionStatus();
  }, []);

  useEffect(() => {
    // Set a timer to navigate to the next screen after 5 seconds
    const timer = setTimeout(() => {
      handleContinue();
    }, 2000);

    // Clear the timer when the component is unmounted or when the introduction screen is dismissed
    return () => clearTimeout(timer);
  }, [showIntroduction]);

  const handleContinue = async () => {
    // try {
    //   // Store in AsyncStorage that the introduction screen has been shown
    //   await AsyncStorage.setItem('@introduction_shown', 'true');
    //   setShowIntroduction(false);
    // } catch (error) {
    //   console.error('Error saving introduction status to AsyncStorage:', error);
    // }

    // Instead of the AsyncStorage code, you can directly navigate to the 'intro4' screen
    navigation.replace('intro4');
  };


  if (showIntroduction) {
    return (
      <View style={styles.container}>
        <Image source={require('../Image/Intro.png')} style={styles.image} />
        <Text>Welcome to the App!</Text>
        <Text>This is the introduction screen.</Text>
        <Button title="Continue" onPress={handleContinue} />
      </View>
    );
  } else {
    // If the introduction screen has been shown or the timer has elapsed, navigate to the main screen
    navigation.navigate('intro4'); // Replace 'MainScreen' with the name of your main screen
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});

export default IntroductionScreen;
