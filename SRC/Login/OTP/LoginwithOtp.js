import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SocialBtn from '../../Componants/SocialButtons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setEmail } from '../../redux/Emai/Emailaction';

const LoginOtp = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleotpscreen = () => {
        navigation.navigate('enterOtp')
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
                <Text style={styles.text}>Hi, Welcome!</Text>
                <Image
                    style={styles.image}
                    source={require('../../Image/hand.png')}
                />
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
                    <View style={styles.ORcontainer}>
                        <Text style={{ color: 'gray' }}>Or</Text>

                    </View>
                    <View style={{ flexDirection: "column", width: '100%' }}>
                        <SocialBtn />
                    </View>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', top: 10, alignItems: 'center', justifyContent: 'center', top: 170 }}>
                <Text style={{ color: 'black', fontWeight: "700", fontSize: 16 }}>Don't Have a Account ?  </Text>
                <TouchableOpacity>
                    <Text style={{ color: '#F8BB25', fontWeight: "700", fontSize: 16 }} >
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    lgbtncontainer: {
        paddingTop: 10,
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ORcontainer: {

        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableOpacitylgbtn: {
        width: '100%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8BB25',
        padding: 10,
        borderRadius: 50,
    },
    loginText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '700',
    },
    otp: {
        fontSize: 16,
        fontWeight: '700',
        borderBottomWidth: 1,
        borderColor: 'black',
        color: 'black'
    },
    Checkcontainer: {
        width: '100%',
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    rememberContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    icon: {
        fontSize: 10,
        marginRight: 8,
        backgroundColor: '#F8BB25',
        borderRadius: 50,
        padding: 5,
    },
    rememberText: {
        color: "black",
        fontWeight: '700',
        fontSize: 16,
    },
    txtemailcontainer: {
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
    },
    ViewtextInput: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 360,
        height: 49,
        borderRadius: 80,
        borderWidth: 1,
        borderColor: '#8E8383',
        fontSize: 16,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        color: 'black'
    },
    container: {
        paddingTop: 55,
        paddingLeft: 25,
        gap: 10,
        alignItems: 'center',

        position: 'relative',
        flexDirection: 'row',
    },
    text: {

        color: '#212121',
        fontSize: 30,
        fontFamily: 'Playfair Display',
        fontWeight: '700',
        lineHeight: 39,
    },
    image: {
        width: 30,
        height: 30,

    },
});

export default LoginOtp;
