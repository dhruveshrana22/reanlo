import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import ArrowCompo from '../../Componants/Arrowcompo';
import { ConditionContent } from './Conditions';



const AboutUs = () => {

    return (
        <View style={styles.container}>
            <ArrowCompo name={"About us"} />


            <ConditionContent />






        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15

    },
    box1: {

        padding: 5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 5
    },
    Termbox: {

        padding: 5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 5
    },
    bgbox1: {
        marginTop: 15,
        borderRadius: 10,
        borderColor: '#D8DADC',
        borderWidth: 1,
        padding: 5,

        alignItems: 'flex-start',
    },
    bulet: {
        fontSize: 25,
        color: 'black'
    },
    buletText: {
        fontSize: 14,
        color: 'black'
    }
});

export default AboutUs;
