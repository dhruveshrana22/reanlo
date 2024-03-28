
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Share } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Popover from 'react-native-popover-view';
import PostDetails from './Likeicon';


const SmalPostComponent = () => {
    const emojis = ['❤️', '😂', '🤣', '👍', '🥰'];
    const [isPopoverVisible, setPopoverVisible] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState(null);

    const handleEmojiPress = (emoji) => {
        setSelectedEmoji(emoji);
        setPopoverVisible(false);
    };

    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: `Check out this awesome post!${posts.title}\n${posts.url}`,
                title: posts.title,
                url: posts.url,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <View style={{ gap: 15 }}>
            
            
                <View key={index} style={styles.container}>
                    {/* Render post content */}
                    <View style={styles.imageContainer}>
                        <Image source={post.image} style={styles.image} />
                        <View style={styles.avatarContainer}>
                            <TouchableOpacity>
                                <Image source={post.avatar} style={styles.avatar} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <View style={{flex:1, flexDirection: 'row', alignItems: 'center', paddingHorizontal:5, justifyContent: 'space-between' }}>
                            <Text style={styles.des}>{post.description}</Text>
                            <TouchableOpacity>
                                <SimpleLineIcons name="options-vertical" size={25} color="black" style={styles.optionsvertical} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={{ paddingHorizontal: 10, paddingBottom:10 }}>
                            <View style={styles.bgctr}>
                                <Text style={{ fontSize: 15, color: 'black' }}>{post.ctn}{post.content}</Text>
                            </View>
                        </View>
                        
                        <PostDetails
                            isPopoverVisible={isPopoverVisible}
                            setPopoverVisible={setPopoverVisible}
                            selectedEmoji={selectedEmoji}
                            handleEmojiPress={handleEmojiPress}
                            handleShare={handleShare}
                            emojis={emojis}
                        />
                    </View>
                </View>
        
        </View>
    );
};

const styles = StyleSheet.create({
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
    hideContainer: {


    },
    hideText: {
        fontSize: 16,
        color: 'black',
    },



    container: {
        gap:15,
        height: 'auto',
        width: '100%',
        flexDirection: 'column',
        borderWidth: 0.2,
        borderRadius: 10,
        borderColor:'#424242'
    },
    imageContainer: {
        width: '100%',
        position: 'relative',
        marginRight: 10,
    },
    image: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: "100%",
        height: 300,
        resizeMode: 'cover',
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
    descriptionContainer: {
        paddingLeft: 100,
        flexDirection: 'row',
        top: 0



    },
    optionsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    des: {
        fontWeight: '600',
        fontSize: 15,
        color: "black"
    },
    bgctr: {
        width: '91%',
        alignItems: 'center',

    },
    bgctr2: {
        width: '90%',
        

    }
});

export default SmalPostComponent;
