import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import styles from './style';
import SocialBtn from '../Componants/SocialButtons';
import { setEmail } from '../redux/Emai/Emailaction';

const ForgotePassword = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleotpscreen = () => {
        navigation.navigate('ForgoteOtp')
    }
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleEmailChange = (email) => {
        // Dispatch the setEmail action to update the email in the Redux store
        dispatch(setEmail(email));
    };


    return (
        <View style={{}}>
            <View style={styles.container}>
                <Text style={styles.text}>Forgoat Password</Text>
                <Text style={styles.text2}>
                Enter your registered email Id and we'll{'\n'}send you an OTP
                </Text>
            </View>
              
            <ScrollView>
                <View style={styles.txtemailcontainer}>
                    <View style={styles.ViewtextInput}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={true}
                    placeholderTextColor="#555454"
                    onChangeText={handleEmailChange} // Call the handler function on text change
                />
                    </View>

                    <View style={styles.Checkcontainer}>

                        <View style={styles.rememberContainer}>
                            <TouchableOpacity>
                                <Text style={styles.otp}>
                                    Log In With Password
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* Login Button  */}
                    <View style={styles.lgbtncontainer}>
                        <TouchableOpacity style={styles.touchableOpacitylgbtn} onPress={handleotpscreen}>
                            <Text style={styles.loginText}>Get Otp</Text>
                        </TouchableOpacity>
                    </View>
                   
                   
                </View>
            </ScrollView>
            
        </View>
    );
};

export default ForgotePassword;
