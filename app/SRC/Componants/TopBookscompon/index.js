import React from 'react';
import { View, FlatList, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const TopBookscomp = ({ titlesData, customImageStyle }) => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.txt}>{item.title}</Text>
            <FlatList
                data={item.data}
                keyExtractor={book => book.id}
                renderItem={({ item: book }) => (
                    <TouchableOpacity activeOpacity={1} onPress={() => handleImagePress(book.id)}>
                        <Image source={book.image} style={[styles.image, customImageStyle]} />
                    </TouchableOpacity>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );

    const handleImagePress = (id) => {
        console.log('Image with id', id, 'pressed');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={titlesData}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        paddingHorizontal:10,
        paddingTop: 10,
        marginBottom: 10,
        gap: 15,
    },
    image: {
        width: 70,
        height: 100,
        marginRight: 13,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    txt: {
        fontWeight: '700',
        fontSize: 20,
        color: 'black',
    },
});

export default TopBookscomp;
