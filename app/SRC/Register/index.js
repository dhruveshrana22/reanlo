import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import styles from './Style';
import CustomTextInput from '../Componants/custominputtext';
import SocialBtn from '../Componants/SocialButtons';
import RoundImageUploader from '../Componants/RoundImageUploader';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setUserDetails } from '../redux/UserDetail/userdetail';
import RjsBox from '../Componants/custominputtext/Ragistermsgbox';
import EmailErrorbox from '../Componants/EmailErrorbox';

const SignUp = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [bio, setBio] = useState('');
    const [profileImage, setProfileImage] = useState();
    const [emailError, setEmailError] = useState(false);

    const dispatch = useDispatch();
    const navigation = useNavigation();



    const handleSignUp = () => {
        // Validate input fields
        if (!validateEmail(email)) {
            // Email is not in a valid format
            // Handle the validation error (set emailError to true)
            setEmailError(true);

            // Reset emailError to false after 7 seconds
            setTimeout(() => {
                setEmailError(false);
            }, 7000);

            return;
        }
        // Reset emailError to false when email format is correct



        // Create an object with user details
        const userDetails = {
            fullName,
            userName,
            email,
            password,
            phoneNo,
            bio,
            profileImage,
        };

        // Dispatch the action to store user details in Redux
        dispatch(setUserDetails(userDetails));
        navigation.replace('FavoritBook');
        // Additional logic (navigation, API calls, etc.)
    };

    // Email validation function using regex
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
        return emailRegex.test(email);
    };





    const handleImageUpload = (image) => {
        setProfileImage(image);
    };


    const handleCheckBoxToggle = () => {
        setIsChecked((prev) => !prev);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const iconArray = {
        'User Name': AntDesignIcon,
        'Password': FontAwesomeIcon,

    };



    const textInputPropsArray = [
        {
            style: styles.textInput,
            placeholder: 'Full Name',
            keyboardType: 'default',
            autoCapitalize: 'none',
            autoCorrect: true,
            placeholderTextColor: '#555454',
            value: fullName,
            onChangeText: setFullName,
        },
        {
            style: styles.textInput,
            placeholder: 'User Name',
            keyboardType: 'default',
            autoCapitalize: 'none',
            autoCorrect: true,
            placeholderTextColor: '#555454',
            hasIcon: true,
            value: userName,
            onChangeText: setUserName,
        },
        {
            style: styles.textInput,
            placeholder: 'Email',
            keyboardType: 'email-address',
            autoCapitalize: 'none',
            autoCorrect: true,
            placeholderTextColor: '#555454',
            value: email,
            onChangeText: setEmail,
        },
        {
            style: styles.textInput,
            placeholder: 'Password',
            keyboardType: 'default',
            autoCapitalize: 'none',
            autoCorrect: true,
            secureTextEntry: !isPasswordVisible,
            placeholderTextColor: '#555454',
            hasIcon: true,
            value: password,
            onChangeText: setPassword,
        },
        {
            style: styles.textInput,
            placeholder: 'Phone No',
            keyboardType: 'phone-pad',
            autoCapitalize: 'none',
            autoCorrect: true,
            placeholderTextColor: '#555454',
            value: phoneNo,
            onChangeText: setPhoneNo,
        },
        {
            style: styles.textInput,
            placeholder: 'Bio',
            keyboardType: 'default',
            autoCapitalize: 'sentences',
            autoCorrect: true,
            multiline: true,
            numberOfLines: 4,
            placeholderTextColor: '#555454',
            value: bio,
            onChangeText: setBio,
        },
    ];

    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false); // Hide the message after 7 seconds
        }, 7000);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);





    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <Text style={styles.text}>Let's Register Accounts</Text>
                </View>
                <View>
                    <RoundImageUploader onImageUpload={handleImageUpload} />
                </View>
                <View style={styles.txtemailcontainer}>
                    {textInputPropsArray.map((textInputProps, index) => {
                        const IconComponent = iconArray[textInputProps.placeholder];
                        return (
                            <View style={styles.ViewtextInput} key={index}>
                                <CustomTextInput
                                    style={styles.textInput}
                                    {...textInputProps}

                                // onChangeText={handleChange}  // Pass onChangeText function

                                />
                                {textInputProps.hasIcon && (
                                    <TouchableOpacity
                                        onPress={textInputProps.placeholder === 'Password' ? togglePasswordVisibility : null}
                                        style={styles.iconContainer}
                                    >
                                        <IconComponent
                                            name={
                                                textInputProps.placeholder === 'Password'
                                                    ? isPasswordVisible
                                                        ? 'eye'
                                                        : 'eye-slash'
                                                    : textInputProps.placeholder === 'User Name'
                                                        ? 'exclamationcircleo'
                                                        : 'default-icon' // Add a default icon name or handle as needed
                                            }
                                            size={20}
                                            color="#555454"
                                        />
                                    </TouchableOpacity>
                                )}

                            </View>
                        );
                    })}
                </View>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', padding: 25 }}>
                    <View>
                        <CheckBox isChecked={isChecked} onPress={() => handleCheckBoxToggle()} />
                    </View>
                    <View style={{ paddingHorizontal: 10, }}>
                        <Text style={styles.termsText}>
                            By clicking on you agree to{' '}
                            <Text style={styles.underline}>Terms & Conditions</Text> and{' '}
                            <Text style={styles.underline}>Privacy Policy</Text>.
                        </Text>
                    </View>
                </View>


                <View style={styles.lgbtncontainer}>
                    <TouchableOpacity style={styles.touchableOpacitylgbtn} onPress={handleSignUp}>
                        <Text style={styles.loginText}>Next</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.ORcontainer}>
                    <Text style={{ color: 'gray' }}>Or</Text>

                </View>
                <View style={{ flexDirection: "column", width: '100%' }}>
                    <SocialBtn />
                </View>
                <View style={{ flexDirection: 'row', top: 10, alignItems: 'center', justifyContent: 'center', top: 100, paddingBottom: 200 }}>
                    <Text style={{ color: 'black', fontWeight: "700", fontSize: 16 }}>Alredy Have a Account ?  </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#F8BB25', fontWeight: "700", fontSize: 16 }} >
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
            <View style={{ alignItems: 'center', position: 'absolute', bottom: '42%', width: '100%' }}>
                {emailError && <EmailErrorbox />}
            </View>
            {showMessage && (
                <View style={{ alignItems: 'center', position: 'absolute', bottom: '42%', width: '100%' }}>
                    <RjsBox />
                </View>
            )}
        </ScrollView>
    );
};



const CheckBox = ({ isChecked, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
            {isChecked ? (
                <Entypo name="check" size={15} color="green" />
            ) : (
                <View style={styles.checkbox} />
            )}
        </TouchableOpacity>
    );
};
export default SignUp;
