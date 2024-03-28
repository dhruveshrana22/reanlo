import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import RoundImageUploader from '../../Componants/RoundImageUploader';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setUserDetails } from '../../redux/UserDetail/userdetail';
import RjsBox from '../../Componants/custominputtext/Ragistermsgbox';
import styles from './style';
import CustomTextInput from '../../Componants/custominputtext';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import ImagePicker from 'react-native-image-crop-picker'; // Import from 'react-native-image-crop-picker'
import { Image } from 'react-native';
import ArrowCompo from '../../Componants/Arrowcompo';


const Becomeuthore = () => {
    const userDetails = useSelector((state) => state.loginReducer.loggedInUser);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [fullName, setFullName] = useState(userDetails.fullName || ''); // Set initial value from userDetails or empty string if userDetails.fullName is undefined
    const [userName, setUserName] = useState(userDetails.userName || ''); // Set initial value from userDetails or empty string if userDetails.userName is undefined
    const [email, setEmail] = useState(userDetails.email || ''); // Set initial value from userDetails or empty string if userDetails.email is undefined
    const [password, setPassword] = useState(userDetails.password || ''); // Set initial value from userDetails or empty string if userDetails.password is undefined
    const [phoneNo, setPhoneNo] = useState(userDetails.phoneNo || ''); // Set initial value from userDetails or empty string if userDetails.phoneNo is undefined
    const [bio, setBio] = useState(userDetails.bio || ''); // Set initial value from userDetails or empty string if userDetails.bio is undefined
    const [profileImage, setProfileImage] = useState(userDetails.profileImage || ''); // Set initial value from userDetails or empty string if userDetails.profileImage is undefined
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
        navigation.replace('login');
        // Additional logic (navigation, API calls, etc.)
    };

    // Email validation function using regex
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
        return emailRegex.test(email);
    };





    const handleImageUpload = async () => {
        try {
            const response = await ImagePicker.openPicker({
                width: 300,
                height: 300,
                cropping: true,
                mediaType: 'photo',
            });

            if (response && !response.didCancel) {
                setAvatarSource(response.path);
                // You may want to save the new image URI to userDetails.profileImage.uri here
            }
        } catch (error) {
            console.log('ImagePicker Error: ', error);
        }
    };

    useEffect(() => {
        if (userDetails.profileImage && userDetails.profileImage.uri) {
            setAvatarSource(userDetails.profileImage.uri);
        }
    }, [userDetails.profileImage]);
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



    const [avatarSource, setAvatarSource] = useState(null);

    const selectImage = async () => {
        try {
            const response = await ImagePicker.openPicker({
                width: 300,
                height: 300,
                cropping: true,
                mediaType: 'photo',
            });

            if (response && !response.didCancel) {
                const image = { uri: response.path };
                setAvatarSource(image);
                // Call the onImageUpload prop to pass the image data to the parent component
                onImageUpload(image);
            }
        } catch (error) {
            console.log('ImagePicker Error: ', error);
        }
    };






    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <ArrowCompo name={'Become an Author'} />
                </View>
                <View>
                    <View style={styles.container2}>
                        <TouchableOpacity onPress={handleImageUpload} style={styles.avatarContainer} activeOpacity={1}>
                            {avatarSource ? (
                                <Image source={{ uri: avatarSource }} style={styles.avatarImage} />
                            ) : (
                                <Avatar
                                    rounded
                                    size={100}
                                    overlayContainerStyle={{ backgroundColor: '#FFE499' }}
                                    icon={{ name: 'user-o', size: 40, type: 'font-awesome', color: 'black' }}
                                    iconStyle={{ backgroundColor: 'transparent' }}
                                />
                            )}
                        </TouchableOpacity>

                    </View>
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


                <View style={styles.lgbtncontainer}>
                    <TouchableOpacity style={styles.touchableOpacitylgbtn} >
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>
                </View>






            </View>


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
export default Becomeuthore;
