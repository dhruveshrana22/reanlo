import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Animated, KeyboardAvoidingView } from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import AnimatedView from '../../../Componants/animateview/AnimatedView';

const EnterOtp = ({ email }) => {
  const [isLoginSuccessful, setLoginSuccessful] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']); // Array to store each digit of OTP
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleDone = () => {
    // Reset the OTP fields and hide the animated view when "Done" button is pressed
    setOtp(['', '', '', '']);
    setLoginSuccessful(false);
    animatedValue.setValue(0);
  };


  // Array to store references of each TextInput
  const TextInputRefs = Array(4)
    .fill(0)
    .map((_, index) => React.createRef());

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Move focus to the next input or the previous one based on user input
    if (value !== '' && index < 3) {
      TextInputRefs[index + 1].focus();
    } else if (value === '' && index > 0) {
      TextInputRefs[index - 1].focus();
    }

    setOtp(newOtp);
  };

  const handleKeyPress = (index, key) => {
    // Handle backspace key
    if (key === 'Backspace' && index > 0 && otp[index] === '') {
      TextInputRefs[index - 1].focus();
    }
  };

  const handleLogin = () => {
    // Combine the OTP digits into a single string
    const enteredOtp = otp.join('');

    // Check if the OTP field is completely filled and if it matches the valid OTP ("1234")
    if (enteredOtp.length === 4 && enteredOtp === "1234") {
      // Show the animated view
      setLoginSuccessful(true);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    } else {
      // Handle invalid login case (e.g., show an error message)
      alert("Invalid OTP. Please fill in all fields with the correct OTP");
    }
  };
  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <View>
        <View style={styles.backarrowctr}>
          <TouchableOpacity style={[styles.container&& styles.disabledButton]} onPress={onPress}  disabled={isLoginSuccessful}>
            <Icon name="arrowleft" size={25} color="black" style={styles.img} />
          </TouchableOpacity>
          <View style={{ paddingTop: "3%" }}>
            <Text style={styles.OTPtext}>
              Enter OTP
            </Text>
            <Text style={styles.OTPDictext}>
              The OTP will be sent on the registered email.
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'black', paddingTop: "5%", fontWeight: "500" }}>
              {email}
            </Text>
          </View>
          <View style={styles.txtsmlcontainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (TextInputRefs[index] = ref)}
                style={styles.input}
                value={digit}
                onChangeText={(value) => handleOtpChange(index, value)}
                keyboardType="numeric"
                maxLength={1}
                onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
              />
            ))}
          </View>
        </View>
        <View style={styles.lgbtncontainer}>
          <TouchableOpacity
            style={[styles.touchableOpacitylgbtn, isLoginSuccessful && styles.disabledButton]}
            onPress={() => handleLogin()}
            disabled={isLoginSuccessful}
          >
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 300, }}>
          {isLoginSuccessful && (
            <AnimatedView animatedValue={animatedValue} handleDone={handleDone} />
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};



const mapStateToProps = (state) => ({
  email: state.Email.email,
});

export default connect(mapStateToProps)(EnterOtp);
