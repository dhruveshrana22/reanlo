import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './style';




const BottomSheetContent = ({ contentText, onClose  ,title}) => {


    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (selectedItem, index) => {
        // Handle selection here if needed
        setSelectedItem(selectedItem);
    };

    return (


        <View style={styles.bgctr}>
            <View style={styles.createpostctr}>
                <Text style={styles.creatposttext}>{title}</Text>
                <TouchableOpacity onPress={onClose} style={styles.closebtn}>
                    <Icon name="close-outline" size={20} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ width: '100%', paddingHorizontal: 13 }}>
                <SelectDropdown
                    data={['The Power of Habit', 'Meditations', 'How to Win Friends and Influence People', 'Watchmen', 'A Short History of Nearly Everything', 'The Selfish Gene']}
                    onSelect={(selectedItem, index) => handleSelect(selectedItem, index)}
                    defaultButtonText="Select a book"
                    buttonTextSelection={(selectedItem, index) => (
                        <>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>{selectedItem}</Text>
                                {selectedItem && <AntDesign name="down" size={20} color="black" />}
                            </View>
                        </>
                    )}
                    buttonStyle={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        padding: 10,
                        borderRadius: 30,
                        borderColor: 'black',
                        borderWidth: 1
                    }}
                    buttonTextStyle={{
                        color: 'black',
                        fontSize: 16,
                        textAlign: 'left'
                    }}
                    rowStyle={{
                        backgroundColor: '#FFFCF4',
                        borderBottomWidth: 1,
                        borderBottomColor: '#F8BB25',
                    }}
                    rowTextStyle={{
                        color: 'black',
                        fontSize: 14,
                        textAlign: 'left',
                    }}
                    dropdownStyle={{
                        marginTop: 10,
                        borderColor: '#F8BB25',
                        borderWidth: 2,
                        borderBottomEndRadius: 15,
                        borderBottomLeftRadius: 15
                    }}
                    dropdownOffset={{ top: 30, left: 0 }}
                />
            </View>
            <View style={{ paddingVertical: 20, width: '100%', paddingHorizontal: 13 }}>
                <TextInput
                    style={{
                        height: 120,
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 15,
                        paddingHorizontal: 15 ,
                        paddingVertical:15,
                        textAlignVertical: 'top' // To align text at the top

                    }}
                    placeholderTextColor={"black"}
                    placeholder="Enter Text"
                    multiline
                />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: '100%', paddingHorizontal: 13, gap: 15 }}>
                <TouchableOpacity>
                    <Feather name="camera" size={25} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="view-gallery-outline" size={25} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ width: '100%', paddingHorizontal: 13, alignItems: 'center', paddingVertical: 20 }}>
                <TouchableOpacity style={{ backgroundColor: '#F8BB25', width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                    <Text style={{ fontSize: 18, fontWeight: '800' ,color:'black'}}>
                        Post
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

    )
};
const UpdateProgressBootomsheet = ({ contentText, onClose }) => {


    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelect = (selectedItem, index) => {
        // Handle selection here if needed
        setSelectedItem(selectedItem);
    };

    return (


        <View style={styles.bgctr}>
            <View style={[styles.createpostctr1,{}]}>
                <Text style={styles.creatposttext}>Update Progress</Text>
                <TouchableOpacity onPress={onClose} style={styles.closebtn}>
                    <Icon name="close-outline" size={15} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.createpostctr2}>
                <Text style={styles.creatposttext2}>The Weight of Things</Text>
            </View>

            <View style={{ width: '100%', paddingHorizontal: 13 }}>
                <SelectDropdown
                    data={['The Power of Habit', 'Meditations', 'How to Win Friends and Influence People', 'Watchmen', 'A Short History of Nearly Everything', 'The Selfish Gene']}
                    onSelect={(selectedItem, index) => handleSelect(selectedItem, index)}
                    defaultButtonText="By Chapter"
                    buttonTextSelection={(selectedItem, index) => (
                        <>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>{selectedItem}</Text>
                                {selectedItem && <AntDesign name="down" size={20} color="black" />}
                            </View>
                        </>
                    )}
                    buttonStyle={{
                        width: '100%',
                        backgroundColor: '#FFFFFF',
                        padding: 10,
                        borderRadius: 30,
                        borderColor: 'black',
                        borderWidth: 1
                    }}
                    buttonTextStyle={{
                        color: 'black',
                        fontSize: 16,
                        textAlign: 'left'
                    }}
                    rowStyle={{
                        backgroundColor: '#FFFCF4',
                        borderBottomWidth: 1,
                        borderBottomColor: '#F8BB25',
                    }}
                    rowTextStyle={{
                        color: 'black',
                        fontSize: 14,
                        textAlign: 'left',
                    }}
                    dropdownStyle={{
                        marginTop: 10,
                        borderColor: '#F8BB25',
                        borderWidth: 2,
                        borderBottomEndRadius: 15,
                        borderBottomLeftRadius: 15
                    }}
                    dropdownOffset={{ top: 30, left: 0 }}
                />
            </View>
            <View style={{ paddingVertical: 20, width: '100%', paddingHorizontal: 13 }}>
                <TextInput
                    style={{
                            
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 30,
                        paddingHorizontal: 15 ,
                       color:'black'

                    }}
                    placeholderTextColor={"black"}
                    placeholder="Chapter 1"
                    multiline
                />
            </View>

            

            <View style={{ width: '100%', paddingHorizontal: 13, alignItems: 'center', paddingVertical: 20 }}>
                <TouchableOpacity style={{ backgroundColor: '#F8BB25', width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
                    <Text style={{ fontSize: 18, fontWeight: '800' ,color:'black'}}>
                        Update
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

    )
};






export  {BottomSheetContent,UpdateProgressBootomsheet};
