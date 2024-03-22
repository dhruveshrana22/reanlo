import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ArrowCompo from '../../Componants/Arrowcompo';
import styles from './style';
import SearchBar from '../../Componants/Searchbar/SearchBar';
import { CurrentReadBook2 } from '../../Componants/My BookComponant/CurrentReadingBook';

const CurranreadScreen = () => {
    const data = {
        image: require('../../Image/TopBooks/sh.png'),
        image2: require("../../Image/sandra.png"),
        image3: require("../../Image/theweight.png"),

    }

    return (

        <>
            <View style={styles.mainctr}>


                <ScrollView showsVerticalScrollIndicator={false}
                    stickyHeaderIndices={[1]}
                    style={{  }}
                >

                    <ArrowCompo name={'Currently Reading'} />

                    <View style={styles.SearchBar}>
                        <SearchBar />
                    </View>

                    <View style={{}}>
                        <CurrentReadBook2/>
                        <CurrentReadBook2/>
                        <CurrentReadBook2/>
                        <CurrentReadBook2/>
                        <CurrentReadBook2/>
                        <CurrentReadBook2/>
                       
                    </View>
                    
                </ScrollView>
            </View>
        </>





    );
};


export default CurranreadScreen;
