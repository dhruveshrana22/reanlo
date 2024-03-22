import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

const Followerbox = ({ no, title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {no}
            </Text>
            <Text style={styles.text2}>
                {title}
            </Text>
        </View>
    );
};
const Followerbox2 = ({ nos, title1 }) => {
    return (
        <View style={styles.container2}>
           <View style={{flex:1}}>
           <Image source={require("../Image/TopBooks/sh.png")} style={{width:90,height:90}}/>

           </View>
           <View style={{alignItems:'center', gap:5, flex:1}}>
           <Text style={styles.text}>
                {nos}
            </Text>
            <View style={{width:80, alignItems:'center', flex:1}}>
            <Text style={[styles.text2,{color:'gray', fontSize:14, flex:1}]}>
                {title1}
            </Text>
            </View>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap:3,
        backgroundColor: '#FFFFFF',
        borderColor: '#D9D9D9',
        borderWidth: 0.7,
        paddingHorizontal: 30,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 100,
        
        elevation: 5, // Add elevation for drop shadow
        shadowColor: '#000', // Shadow color (if needed)
        shadowOffset: { width: 0, height: 2 }, // Shadow offset (if needed)
        shadowOpacity: 0.25, // Shadow opacity (if needed)
        shadowRadius: 3.84, // Shadow radius (if needed)
        flex:1
    },
    container2: {
        gap:3,
        backgroundColor: '#FFFFFF',
        
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        
        elevation: 5, // Add elevation for drop shadow
        shadowColor: 'black', // Shadow color (if needed)
        shadowOffset: { width: 0, height: 2 }, // Shadow offset (if needed)
        shadowOpacity: 0.25, // Shadow opacity (if needed)
        shadowRadius: 6.84, // Shadow radius (if needed)
        flex:1
    },
    text: {
        fontSize: 18,
        color: '#F8BB25'
    },
    text2: {
        fontSize: 16,
        color: 'black',
        textAlignVertical:'bottom'
    }
});

export { Followerbox,Followerbox2 };
