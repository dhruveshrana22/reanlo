import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import styles from './Style';
import CustomTextInput from '../Componants/custominputtext';
import FontAwesomeIcon2 from 'react-native-vector-icons/FontAwesome';
import SocialBtn from '../Componants/SocialButtons';
import RoundImageUploader from '../Componants/RoundImageUploader';
const SignUp = () => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxToggle = () => {
        setIsChecked((prev) => !prev);
    };
    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    // Define an array of icons corresponding to each placeholder
    const iconArray = {
        'User Name': AntDesignIcon,
        'Password': FontAwesomeIcon,
        // Add more entries as needed
    };

    const textInputPropsArray = [
        {
            style: styles.textInput,
            placeholder: 'Full Name',
            keyboardType: 'default',
            autoCapitalize: 'none',
            autoCorrect: true,
            placeholderTextColor: '#555454',
        },
        {
            style: styles.textInput,
            placeholder: 'User Name',
            keyboardType: 'default',
            autoCapitalize: 'none',
            autoCorrect: true,
            placeholderTextColor: '#555454',
            hasIcon: true,
        },
        {
            style: styles.textInput,
            placeholder: 'Email',
            keyboardType: 'email-address',
            autoCapitalize: 'none',
            autoCorrect: true,
            placeholderTextColor: '#555454',
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
        },
        {
            style: styles.textInput,
            placeholder: 'Phone No',
            keyboardType: 'phone-pad',
            autoCapitalize: 'none',
            autoCorrect: true,
            placeholderTextColor: '#555454',
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
        },
    ];

    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <Text style={styles.text}>Let's Register Accounts</Text>
                </View>
                        <View>
                            <RoundImageUploader/>
                        </View>
                <View style={styles.txtemailcontainer}>
                    {textInputPropsArray.map((textInputProps, index) => {
                        const IconComponent = iconArray[textInputProps.placeholder];
                        return (
                            <View style={styles.ViewtextInput} key={index}>
                                <CustomTextInput {...textInputProps} />
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
                        <CheckBox isChecked={isChecked} onPress={handleCheckBoxToggle} />
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
                    <TouchableOpacity style={styles.touchableOpacitylgbtn} onPress={() => console.log('Log In pressed')}>
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ORcontainer}>
                    <Text style={{ color: 'gray' }}>Or</Text>

                </View>
                <View style={{ flexDirection: "column", width: '100%' }}>
                    <SocialBtn />
                </View>
                <View style={{ flexDirection: 'row', top: 10, alignItems: 'center', justifyContent: 'center', top: 100 ,paddingBottom:200}}>
                    <Text style={{ color: 'black', fontWeight: "700", fontSize: 16 }}>Alredy Have a Account ?  </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#F8BB25', fontWeight: "700", fontSize: 16 }} >
                            Sign In
                        </Text>
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
                <FontAwesomeIcon name="check" size={15} color="green" />
            ) : (
                <View style={styles.checkbox} />
            )}
        </TouchableOpacity>
    );
};
export default SignUp;
