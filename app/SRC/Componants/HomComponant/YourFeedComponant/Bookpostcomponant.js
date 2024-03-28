// BookPostComponent.js

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import PostDetails from './Likeicon';

const BookPostComponent = ({ post, isPopoverVisible, setPopoverVisible, selectedEmoji, handleEmojiPress, handleShare, emojis,imagebook,description }) => {
    return (
        <View style={styles.container}>
            <View style={styles.descriptionContainer2}>
                <TouchableOpacity>
                    <Image source={post.avatar3} style={styles.avatar3} />
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, justifyContent: 'space-between' }}>
                    <Text style={styles.des}>{description}</Text>
                    <TouchableOpacity>
                        <SimpleLineIcons name="options-vertical" size={25} color="black" style={styles.optionsvertical} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={{ flex: 1, flexDirection: 'row', width: 400, alignItems: 'center', paddingHorizontal: 13, paddingBottom: 10 }}>
                    <Image source={imagebook} style={styles.shimg} />
                    <View style={{ alignItems: 'center', width: 200, justifyContent: 'center' }}>
                        <Text style={{ color: 'black' }}><Text style={styles.bookTitle}>The Weight of Things</Text>{'\n'}By Jereliye Do</Text>
                    </View>
                </View>
                <PostDetails
                    post={post}
                    isPopoverVisible={isPopoverVisible}
                    setPopoverVisible={setPopoverVisible}
                    selectedEmoji={selectedEmoji}
                    handleEmojiPress={handleEmojiPress}
                    handleShare={handleShare}
                    emojis={emojis}
                />
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    bookTitle: {
        fontWeight: '900', // Add any other styles you want to apply
    },
    yourcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    libraryText: {
        color: '#343434',
        fontSize: 20,
        fontFamily: 'Outfit',
        fontWeight: '800',
        flex: 1,
        flexWrap: 'wrap',
    },
    hideContainer: {},
    hideText: {
        fontSize: 16,
        color: 'black',
    },

    container: {
        gap: 15,
        height: 'auto',
        width: '100%',
        flexDirection: 'column',
        borderWidth: 0.2,
        borderRadius: 10,
        borderColor: '#424242',
    },
    container4: {
        marginTop: 20,
        gap: 15,
        height: 'auto',
        width: '100%',
        flexDirection: 'column',
        borderWidth: 0.2,
        borderRadius: 10,
        borderColor: '#424242',
    },
    imageContainer: {
        width: '100%',
        position: 'relative',
        marginRight: 10,
    },
    image: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: '100%',
        height: 300,
        objectFit: 'cover'
    },
    avatarContainer: {
        position: 'absolute',
        top: 260,
        left: 20,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    },

    shimg:{
        width:70,
        height:100,
        borderRadius:10
    },
    avatar3: {

        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    },
    descriptionContainer: {
        paddingLeft: 100,
        flexDirection: 'row',
        top: 0,
    },
    descriptionContainer2: {
        flex:1,
       paddingHorizontal:8,
        flexDirection: 'row',
        paddingTop:10

    },
    optionsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    des: {
        fontWeight: '600',
        fontSize: 15,
        color: 'black',
    },
    bgctr: {
        width: '91%',
        alignItems: 'center',
    },
    bgctr3: {
        width: '100%',
        alignItems: 'center',
    },
    charliimg: {
        width: 20,
        height: 20,
        borderRadius: 50
    },
    bgctr2: {
        width: '90%',
    },
    rateimg: {
        width: 130,
        height: 13
    },
    rateView: {
        paddingHorizontal: 10,
        paddingBottom: 10
    }
});


export default BookPostComponent;
