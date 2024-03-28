import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput } from 'react-native';
import ArrowCompo from '../../Componants/Arrowcompo';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import RBSheet from 'react-native-raw-bottom-sheet';
import { BottomSheetContent, DeleteAccountBottomsheet, LogOutBootmSheet } from '../../Componants/CreatepostBottomSheet';


const PasswordInput = ({ onChangeText }) => {
    const [isPasswordVisibleOld, setIsPasswordVisibleOld] = useState(false);
    const [isPasswordVisibleNew, setIsPasswordVisibleNew] = useState(false);
    const [isPasswordVisibleConfirm, setIsPasswordVisibleConfirm] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility

    // Function to toggle modal visibility
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const togglePasswordVisibility = (type) => {
        switch (type) {
            case 'old':
                setIsPasswordVisibleOld(prev => !prev);
                break;
            case 'new':
                setIsPasswordVisibleNew(prev => !prev);
                break;
            case 'confirm':
                setIsPasswordVisibleConfirm(prev => !prev);
                break;
            default:
                break;
        }
    };

    return (
        <View style={{ gap: 15, paddingVertical: 15 }}>
            <View style={styles.containertxtinput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter old password"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={true}
                    secureTextEntry={!isPasswordVisibleOld}
                    placeholderTextColor="#555454"
                    onChangeText={(text) => onChangeText(text, 'old')} // Ensure correct usage here
                />
                <TouchableOpacity onPress={() => togglePasswordVisibility('old')} style={styles.iconContainer}>
                    <FontAwesomeIcon
                        name={isPasswordVisibleOld ? 'eye' : 'eye-slash'}
                        size={20}
                        color="#555454"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containertxtinput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter new password"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={true}
                    secureTextEntry={!isPasswordVisibleNew}
                    placeholderTextColor="#555454"
                    onChangeText={(text) => onChangeText(text, 'new')} // Ensure correct usage here
                />
                <TouchableOpacity onPress={() => togglePasswordVisibility('new')} style={styles.iconContainer}>
                    <FontAwesomeIcon
                        name={isPasswordVisibleNew ? 'eye' : 'eye-slash'}
                        size={20}
                        color="#555454"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containertxtinput}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Reenter password"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={true}
                    secureTextEntry={!isPasswordVisibleConfirm}
                    placeholderTextColor="#555454"
                    onChangeText={(text) => onChangeText(text, 'confirm')} // Ensure correct usage here
                />
                <TouchableOpacity onPress={() => togglePasswordVisibility('confirm')} style={styles.iconContainer}>
                    <FontAwesomeIcon
                        name={isPasswordVisibleConfirm ? 'eye' : 'eye-slash'}
                        size={20}
                        color="#555454"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Configuration = () => {
    const [isEnabled, setIsEnabled] = useState(false);

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

    return (
        <View style={styles.container}>
            <ArrowCompo name={"Configuration"} />
            <View style={styles.notificationctr}>
                <Text style={styles.notificationtext}>
                    Notification
                </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#F8BB25" }}
                    thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <TouchableOpacity style={styles.notificationctr} onPress={toggleExpansion} activeOpacity={1}>
                <Text style={styles.notificationtext}>
                    Change Password
                </Text>
                <Icon name={isExpanded ? 'angle-up' : 'angle-down'} size={25} color='black' />
            </TouchableOpacity>
            {isExpanded && (
                <View>
                    <PasswordInput onChangeText={(text, type) => console.log(text, type)} />

                </View>
            )}
            <TouchableOpacity style={styles.notificationctr} onPress={openBottomSheet}>
                <Text style={styles.notificationtext}>
                    Delete Account
                </Text>
                <AntDesign name='right' size={20} color='black' />

            </TouchableOpacity>
            <RBSheet
                ref={bottomSheetRef}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={425}
                backdropOpacity={0.5} // Adjust the opacity value as needed
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)" // Change the color here
                    },
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }
                }}
            >
                {/* Use the BottomSheetContent component with custom text */}
                <DeleteAccountBottomsheet title={"Delete Accouunt"} onClose={() => bottomSheetRef.current.close()} />
            </RBSheet>
            <TouchableOpacity style={styles.notificationctr} onPress={openLogoutBottomSheet}>
                <Text style={[styles.notificationtext, { color: '#F04248' }]}>
                    Log Out
                </Text>
                <Entypo name='log-out' size={20} color='#F04248' />
            </TouchableOpacity>
            <RBSheet
                ref={logbottomSheetRef}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={300}
                backdropOpacity={0.5} // Adjust the opacity value as needed
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)" // Change the color here
                    },
                    container: {
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10
                    }
                }}
            >
                {/* Use the BottomSheetContent component with custom text */}
                <LogOutBootmSheet title={"Log Out"} onClose={() => logbottomSheetRef.current.close()} />
            </RBSheet>

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

export default Configuration;
