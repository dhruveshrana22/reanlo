import React from 'react';
import { View, StyleSheet } from 'react-native';
import {ProfileComponent} from '../../Componants/HomComponant/Profilecomponant/ProfileComponent';
import styles from './Style';
import SearchBar from '../../Componants/Searchbar/SearchBar';
import PostComponent from '../../Componants/HomComponant/Postcomponant';
import LibraryComponent from '../../Componants/HomComponant/YourLibraryCompo';
import { ScrollView } from 'react-native-gesture-handler';
import YourFed from '../../Componants/HomComponant/Postcomponant';
import BooksComponant from '../../Componants/Books';
import combinedData from '../../Componants/HomComponant/YourFeedComponant/Profiledatas/PostData';

const HomeScreen = () => {
    const post = combinedData[0];
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}
             stickyHeaderIndices={[1]}
             style={{marginTop:60}}
            >
            <View style={styles.Profilecontainer}>
                <ProfileComponent />

            </View>
                    <View style={styles.SearchBar}>
                        <SearchBar />
                    </View>
                <View style={{ gap: 20 }}>
                    <View style={styles.Post}>
                        <LibraryComponent />
                    </View>
                    <View style={styles.YourFid}>
                        <YourFed />
                    </View>
                </View>
                    <View>

                    </View>
            </ScrollView>
        </View>
    );
};



export default HomeScreen;
