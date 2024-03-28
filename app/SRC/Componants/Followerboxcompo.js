import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


const Followerbox = ({ no, title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {no}
            </Text>
            <Text style={styles.text2}>
                {title}
            </Text>
        </View>
    );
};
const Followerbox2 = ({ nos, title1 }) => {
    return (
        <View style={styles.container2}>
            <View style={{ flex: 1 }}>
                <Image source={require("../Image/TopBooks/sh.png")} style={{ width: 90, height: 90 }} />

            </View>
            <View style={{ alignItems: 'center', gap: 5, flex: 1 }}>
                <Text style={styles.text}>
                    {nos}
                </Text>
                <View style={{ width: 80, alignItems: 'center', flex: 1 }}>
                    <Text style={[styles.text2, { color: 'gray', fontSize: 14, flex: 1 }]}>
                        {title1}
                    </Text>
                </View>
            </View>
        </View>
    );
};
const AuthoreBox = ({ nos, title1 }) => {
    const ICON = {
        note: "note"
    }
    const name = ["Tobi  Lateef", 'Queen Needle', 'Joan  Blessing', 'Joan  Blessing']
    return (<>
            <View style={[styles.textfavratctr,{paddingBottom:10,flex:1}]}>
                <Text style={styles.favratctxt}>
                    Favorite Authors
                </Text>
                <Icon name={ICON.note} size={20} style={{ color: 'black' }} />
            </View>
        <View style={{ flex: 1, flexDirection: 'row', gap: 6, alignItems: 'center', justifyContent: 'center' }}>
            {name.map((names, index) => (
                <View key={index} style={styles.followrauthore}>
                    <Image source={require("../Image/TopBooks/sh.png")} style={{ width: 60, height: 60, borderRadius: 100, }} />

                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <Text style={[styles.text, { color: 'black', width: 50, textAlign: 'center', fontSize: 14 }]}>
                            {names}
                        </Text>

                    </View>
                </View>
            ))}

        </View>
        </>
    );
};



const FavourateGenre = () => {
    const ICON = {
        note: "note"
    }
    const genres = ["Adventure", "Action", "Romance", "Horror",];
    const genres2 = ["Fantasy", "Comedy", "Detective", "School"];
    return (
        <>
            <View style={styles.favratctr}>
                <View style={styles.textfavratctr}>
                    <Text style={styles.favratctxt}>
                        Favorite Genre
                    </Text>
                    <Icon name={ICON.note} size={20} style={{ color: 'black' }} />
                </View>
                <View style={styles.genreContainer}>


                    <View style={{ flexDirection: 'row', flex: 1, gap: 5, }}>
                        {genres.map((genre, index) => (
                            <TouchableOpacity key={index} style={styles.touchebalctr}>
                                <Text style={styles.touuchebaltext}>{genre}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, gap: 5 }}>
                        {genres2.map((genre, index) => (
                            <TouchableOpacity key={index} style={styles.touchebalctr}>
                                <Text style={styles.touuchebaltext}>{genre}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    // foloower author style 
    followrauthore: {
        flex:1,
        gap:8,
        width: 85,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        elevation: 5,
        shadowColor: 'black', // Shadow color
        shadowOffset: { width: 10, height: 1 }, // Shadow offset
        shadowOpacity: 0.50, // Shadow opacity
        shadowRadius: 1, // Shadow radius
    },





    genreContainer: {
        gap: 15,
        paddingVertical: 10
    },

    touuchebaltext: {
        color: 'black',
        flex: 1,
        fontSize: 14,
        fontWeight: '500'
    },
    touchebalctr: {
        alignItems: 'center',
        backgroundColor: '#F8BB25',
        borderRadius: 20,
        padding: 5,
        paddingHorizontal: 15,
        elevation: 5, // Add elevation for shadow effect
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 3 }, // Shadow offset
        shadowOpacity: 0.25, // Shadow opacity
        shadowRadius: 3.84, // Shadow radius
    },
    favratctr: {
        paddingVertical: 10
    },
    favratctxt: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700'
    },

    textfavratctr: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        

    },
    container: {
        gap: 3,
        backgroundColor: '#FFFFFF',
        borderColor: '#D9D9D9',
        borderWidth: 0.7,
        paddingHorizontal: 30,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 100,

        elevation: 5, // Add elevation for drop shadow
        shadowColor: '#000', // Shadow color (if needed)
        shadowOffset: { width: 0, height: 2 }, // Shadow offset (if needed)
        shadowOpacity: 0.25, // Shadow opacity (if needed)
        shadowRadius: 3.84, // Shadow radius (if needed)
        flex: 1
    },
    container2: {
        gap: 3,
        backgroundColor: '#FFFFFF',

        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,

        elevation: 5, // Add elevation for drop shadow
        shadowColor: 'black', // Shadow color (if needed)
        shadowOffset: { width: 0, height: 2 }, // Shadow offset (if needed)
        shadowOpacity: 0.25, // Shadow opacity (if needed)
        shadowRadius: 6.84, // Shadow radius (if needed)
        flex: 1
    },
    text: {
        fontSize: 18,
        color: '#F8BB25'
    },
    text2: {
        fontSize: 16,
        color: 'black',
        textAlignVertical: 'bottom'
    }
});

export { Followerbox, Followerbox2, FavourateGenre, AuthoreBox };
