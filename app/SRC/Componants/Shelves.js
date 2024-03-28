import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView } from 'react-native';

const AddSlave = () => {

    const renderTouchableImages = () => {
        const images = [
            { source: require('../Image/Bookslave.png'), text: 'Classic Collection' },
            { source: require('../Image/Bookslave.png'), text: 'Biography' },
            { source: require('../Image/Bookslave.png'), text: 'Adventure' },
            { source: require('../Image/Bookslave.png'), text: "DNF'ed" },
            { source: require('../Image/Bookslave.png'), text: 'Adventure' },
            // Add more images as needed 
        ];

        return images.map((item, index) => (
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity key={index} style={styles.touchableImageContainer}>
                    <Image source={item.source} style={styles.image} />
                    <View style={{}}>
                        <Text style={styles.text}>{item.text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        ));
    };

    return (
        <>
            <View style={{ paddingBottom: 15 }}>
                <Text style={styles.slave}>Shelves</Text>
            </View>
            <View style={styles.container}>
                <View style={{ flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.plusText}>+</Text>

                    </TouchableOpacity>
                    <Text style={styles.addText}>Add Slave</Text>
                </View>
                <ScrollView horizontal={true} contentContainerStyle={styles.imagesContainer}>
                    {renderTouchableImages()}
                </ScrollView>
            </View>
        </>
    );
};



const TagsComponant = () => {
    const renderTouchableItems = () => {
        const items = [
            { text: 'Meh' },
            { text: '4 Spice' },
            { text: 'ObsessedMMC' },
            { text: 'Rake' },
            { text: 'Morally Grey' },
            { text: 'Loved!' },
            { text: 'No Spice' },

            // Add more items as needed 
        ];

        return items.map((item, index) => (
            <TouchableOpacity key={index} style={styles.touchableItem2} activeOpacity={1}>
                <Text style={styles.itemText2}>{item.text}</Text>
            </TouchableOpacity>
        ));
    };

    return (
        <>
            <View style={{ paddingBottom: 15 }}>
                <Text style={styles.slave}>Tags</Text>
            </View>
            <View style={{ flexWrap: 'wrap', width: '100%' }}>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.addButton2}>
                        <Text style={styles.addText2}>+ Add</Text>
                    </TouchableOpacity>

                    {renderTouchableItems()}

                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    slave: {
        color: 'black',
        fontSize: 22,
        fontWeight: '600',

    },
    text: {
        height: 30,
        color: 'gray',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
        width: 70, // Adjust the width as needed
        flexWrap: 'wrap', // Allow text wrapping
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 15
    },
    addButton: {
        backgroundColor: '#F8BB25',
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    plus: {
    },
    plusText: {
        fontSize: 30,
        color: 'black',
    },
    addText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 12,
        width: 50,
        color: 'black',
        flexWrap: 'wrap', // Allow text wrapping
    },
    imagesContainer: {
        gap: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    touchableImageContainer: {
        alignItems: 'center',

    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },


    container2: {
        gap: 10,
        flexDirection: 'row',
        alignItems: 'flex-start', // Align to the start
        justifyContent: 'flex-start', // Align to the start
        flexWrap: 'wrap',
    },
    addButton2: {
        backgroundColor: '#F8BB25',
        borderRadius: 200,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    addText2: {
        color: 'black',
        fontWeight: '900',
    },
    itemsContainer: {
        flexDirection: 'row',
    },
    touchableItem2: {
        borderRadius: 120,
        alignItems: 'flex-start',
        backgroundColor: '#008037',
        width: 'auto',
        height: 'auto',
        paddingVertical: 15,
        paddingHorizontal: 8,
    },
    itemText2: {
        color: 'white',
        flexWrap: 'wrap',





        fontSize: 12,
        maxWidth: 50,
        textAlign: 'center',

    },

});

export { AddSlave, TagsComponant };
