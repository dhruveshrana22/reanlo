import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ArrowCompo from '../../Componants/Arrowcompo';
import styles from './style';
import SearchBar from '../../Componants/Searchbar/SearchBar';
import ReadedBook from './Readbookcompo';

const BooksReadScreen = () => {
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

                    <ArrowCompo name={'Books to read'} />

                    <View style={styles.SearchBar}>
                        <SearchBar />
                    </View>

                    <View style={{paddingVertical:20, gap:15}}>
                        <ReadedBook image={data.image}/>
                        <ReadedBook image={data.image}/>
                        <ReadedBook image={data.image}/>
                        <ReadedBook image={data.image}/>
                        <ReadedBook image={data.image}/>
                        <ReadedBook image={data.image}/>
                        <ReadedBook image={data.image}/>
                    </View>
                    
                </ScrollView>
            </View>
        </>





    );
};


export default BooksReadScreen;
