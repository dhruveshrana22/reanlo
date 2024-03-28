import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import ArrowCompo from '../../Componants/Arrowcompo';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import RBSheet from 'react-native-raw-bottom-sheet';
import { BottomSheetContent, DeleteAccountBottomsheet, LogOutBootmSheet } from '../../Componants/CreatepostBottomSheet';



export const ConditionContent = ({ names }) => {

    return (
        <View  >
            <ScrollView>
                <View style={styles.bgbox1}>
                    <View style={styles.box1}>
                        <Text style={styles.bulet}>
                            {`\u2022`}

                        </Text>
                        <View style={{ paddingHorizontal: 7, paddingVertical: 3, flex: 1 }}>
                            <Text style={styles.buletText}>
                                These Terms and Conditions govern your use of the Best in Jobs (“we” or “us”) website and your relationship with us. You are requested to read them carefully as they may affect your rights and liabilities under the law. The use of the site is restricted. If you do not agree to these terms and conditions, it’s our sincere request that you do not use this website.

                            </Text>
                        </View>

                    </View>
                    <View style={styles.box1}>
                        <Text style={styles.bulet}>
                            {`\u2022`}

                        </Text>
                        <View style={{ paddingHorizontal: 7, paddingVertical: 3, flex: 1 }}>
                            <Text style={styles.buletText}>
                                You accept the Terms and Conditions by clicking “I agree” or a similar button when you sign up for our services.
                            </Text>
                        </View>

                    </View>
                </View>
                <View style={styles.bgbox1}>
                    <View style={styles.Termbox}>
                        <Text style={[styles.bulet, { fontSize: 20 }]}>
                            1. Terms of Business

                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.bulet}>
                                {`\u2022`}

                            </Text>
                            <View style={{ paddingHorizontal: 10, paddingTop: 5 }} >
                                <Text style={styles.buletText}>
                                    This page contains the Terms of Business under which you may use Our Website. The stated terms constitute an agreement that is binding between the client, the candidate, and Best in Jobs. Any user who violates these terms will have their access suspended or even terminated on the Best in Jobs website, at the sole discretion of Best in Jobs.
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={styles.bgbox1}>
                    <View style={styles.Termbox}>
                        <Text style={[styles.bulet, { fontSize: 20 }]}>
                            2. Use of the Site

                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.bulet}>
                                {`\u2022`}

                            </Text>
                            <View style={{ paddingHorizontal: 10, paddingTop: 5 }} >
                                <Text style={styles.buletText}>
                                    Our site must be used for lawful purposes when seeking jobs or recruiting new staff. In no case is it allowed to undermine the security of the website or any other information either available or submitted to the website. You must not seek access to, alter or delete any information to which you have no access. You must not overload the system via spamming, flooding, or crashing the software.                            </Text>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={styles.bgbox1}>
                    <View style={styles.Termbox}>
                        <Text style={[styles.bulet, { fontSize: 20 }]}>
                            2. Use of the Site

                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.bulet}>
                                {`\u2022`}

                            </Text>
                            <View style={{ paddingHorizontal: 10, paddingTop: 5 }} >
                                <Text style={styles.buletText}>
                                    Our site must be used for lawful purposes when seeking jobs or recruiting new staff. In no case is it allowed to undermine the security of the website or any other information either available or submitted to the website. You must not seek access to, alter or delete any information to which you have no access. You must not overload the system via spamming, flooding, or crashing the software.                            </Text>
                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>









        </View>
    );
};

const Conditions = ({ names }) => {

    return (
        <View style={styles.container}>
            <ArrowCompo name={"Terms of Use"} names={names} />


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

export default Conditions;
