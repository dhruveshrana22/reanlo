import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const LibraryComponent = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.libraryText}>Your Library</Text>

                <View style={styles.hideContainer}>
                    <Text style={styles.hideText}>Hide</Text>
                </View>
            </View>
            <View style={styles.additionalBox}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../../Image/noteimg.png')} // Provide the path to your image
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <View style={{ flexDirection: 'column', gap:10, padding:10,paddingLeft:25}}>
                        <Text style={styles.imageText}>You don't have any {'\n'}books yet.</Text>
                       
                            <TouchableOpacity style={styles.txtlibry}>
                                <Text style={{ color: '#343434', textAlign:'center',fontWeight:'800', fontSize:12}}>
                                    Import your library
                                </Text>
                            </TouchableOpacity>
                       
                    </View>
                </View>
            </View>
        </View>
    );
};



export default LibraryComponent;
