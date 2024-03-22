import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the appropriate vector icon library
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';

const ReadedBook = ({ image }) => {
    return (

        <View style={{ width: '100%', height: 'auto', }}>
            <View style={{ height: 'auto', flexDirection: 'row' }}>
                <Image
                    style={{ width: 87, height: 131, borderRadius: 10 }}
                    source={image}
                />
                <View style={{  flexDirection: 'row', flex: 1,  }}>
                    <View style={{ height: 100, width: "auto", paddingHorizontal: 10, paddingTop:20}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', }}>The Weight of Things</Text>
                        <Text style={{ fontSize: 12, color: '#808080', marginVertical: 5 }}>Chapter 4 of 8</Text>
                        <Image
                            style={{ width: 101, height: 16, marginVertical: 10 }}
                            source={require("../../Image/Rate4.png")}
                        />

                    </View>
                    <View style={{ flex: 1, justifyContent:'flex-end'}}>
                        <TouchableOpacity style={styles.slavebtnctr}>
                            <Text style={styles.slavetext}>
                                Shelves
                            </Text>
                            <AntDesign name="down" size={16} color="black" style={styles.notificationIcon} />
                        </TouchableOpacity>

                    </View>

                </View>
            </View>

        </View>


    );
};


export default ReadedBook;
