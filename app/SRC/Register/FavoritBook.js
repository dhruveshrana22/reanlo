import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ArrowCompo, { ArrowCompo2 } from '../Componants/Arrowcompo';
import SearchBar from '../Componants/Searchbar/SearchBar';
import CollapsibleComponent from './CollepsBookComp';

const FavoritBook = () => {
    return (
        <View style={styles.container}>
            <ArrowCompo2 name={"Favorite book genre"} />
            <ScrollView showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[1]}
            >
                <View style={styles.SearchBar}>
                    <SearchBar />
                </View>
                <View>
                    <CollapsibleComponent />
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 50,
        paddingHorizontal: 15

    },
});

export default FavoritBook;
