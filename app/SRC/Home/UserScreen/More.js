import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput } from 'react-native';
import ArrowCompo from '../../Componants/Arrowcompo';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import RBSheet from 'react-native-raw-bottom-sheet';
import { BottomSheetContent, DeleteAccountBottomsheet, LogOutBootmSheet } from '../../Componants/CreatepostBottomSheet';
import { useNavigation } from '@react-navigation/native';



const More = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const navigation = useNavigation();
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };
    const bottomSheetRef = useRef(null);
    const logbottomSheetRef = useRef(null);

    const openBottomSheet = () => {
        bottomSheetRef.current.open(); // Open the bottom sheet
    };


    const openLogoutBottomSheet = () => {
        logbottomSheetRef.current.open(); // Open the bottom sheet
    };

    const handlenavigate = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <View style={styles.container}>
            <ArrowCompo name={"More..."} />


            <TouchableOpacity style={styles.notificationctr} activeOpacity={1} onPress={() => handlenavigate("Condition")}>
                <Text style={styles.notificationtext}>
                    Terms and Conditions
                </Text>
                <AntDesign name='right' size={20} color='black' />

            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationctr} activeOpacity={1} onPress={() => handlenavigate("Policy")}>
                <Text style={styles.notificationtext}>
                    Privacy Policy
                </Text>
                <AntDesign name='right' size={20} color='black' />

            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationctr} activeOpacity={1} >
                <Text style={styles.notificationtext}>
                    FAQs
                </Text>
                <AntDesign name='right' size={20} color='black' />

            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationctr} activeOpacity={1} onPress={() => handlenavigate("Aboutus")}>
                <Text style={styles.notificationtext}>
                    About Us
                </Text>
                <AntDesign name='right' size={20} color='black' />

            </TouchableOpacity>
            <TouchableOpacity style={[styles.notificationctr, { borderBottomColor: 'transparent' }]} activeOpacity={1}>
                <Text style={styles.notificationtext}>
                    Contact Us
                </Text>
                <AntDesign name='right' size={20} color='black' />

            </TouchableOpacity>




        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15
    },
    notificationtext: {
        color: 'black',
        fontSize: 20,
        fontWeight: '200'
    },
    notificationctr: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center', // Align the switch vertically in the center
        borderBottomColor: '#DCDFE3',
        borderBottomWidth: 2,
        paddingVertical: 20
    },
    textInput: {
        width: '80%',
        color: 'black'
    },
    containertxtinput: {
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
});

export default More;
