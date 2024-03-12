import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileComponent from '../../Componants/HomComponant/Profilecomponant/ProfileComponent';
import styles from './Style';
import SearchBar from '../../Componants/Searchbar/SearchBar';
import PostComponent from '../../Componants/HomComponant/Postcomponant';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Profilecontainer}>
                <ProfileComponent />

            </View>
            <View style={{gap:20}}>
            <View  style={styles.SearchBar}>
                <SearchBar />
            </View>
            <View  style={styles.Post}>
                <PostComponent />
            </View>
            </View>
        </View>
    );
};



export default HomeScreen;
