import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';

const BooksComponent = ({ imageSources ,title ,title1 ,onPressview ,emoji}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',flex:1,paddingVertical:10  }}>
                <View style={{  }}>
                    <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.textContainer}>
                        <Text numberOfLines={5} ellipsizeMode="tail" style={styles.text}>
                          {title} {title1} 
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                   <TouchableOpacity onPress={onPressview}>
                   <Text style={styles.hideText}>View All</Text>
                   </TouchableOpacity>
                </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', gap: 10,  paddingBottom:10}}>
                    {imageSources.map((source, index) => (
                        <View key={index} style={styles.imageContainer}>
                            <Image source={source} style={styles.image} />
                            <Text style={{top:90, left:53, position:'absolute', backgroundColor:'white', borderRadius:100, alignItems:'center', padding:2}}>{emoji}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    hideText: {
        flex:1,
        fontSize: 14,
        color: 'black',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 77,
        height: 111,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: '900'
    },
});

export default BooksComponent;
