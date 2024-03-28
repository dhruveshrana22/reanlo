import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const imagesData = [
    { name: 'Image 1', source: require('../Image/heripoter.png') },
    { name: 'Image 2', source: require('../Image/heripoter.png') },
    { name: 'Image 3', source: require('../Image/heripoter.png') },
    { name: 'Image 3', source: require('../Image/heripoter.png') },
    { name: 'Image 3', source: require('../Image/heripoter.png') },
    { name: 'Image 3', source: require('../Image/heripoter.png') },
    { name: 'Image 3', source: require('../Image/heripoter.png') },
    // Add more images as needed
];

const CollapsibleComponent = () => {
    return (
        <View style={styles.container}>
            {imagesData.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                    <View style={styles.imgtexbgview}>
                        <View style={styles.imgeview}>
                            <Image source={image.source} style={styles.image} />

                        </View>
                        <View >
                            <Text style={styles.imgtext}>{image.name}</Text>

                        </View>
                    </View>
                    <Feather name="check-circle" size={24} color="green" />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    imageContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        justifyContent: 'space-between',
        borderBottomColor: '#DCDFE3',
        borderBottomWidth: 1,
        flex: 1
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
    },
    imgtext: {
        color: 'black'
    },
    imgeview: {

    },
    imgtexbgview: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default CollapsibleComponent;
