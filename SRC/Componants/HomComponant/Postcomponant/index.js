
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Share } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Popover from 'react-native-popover-view';
import post from './PostData';

const PostComponent = () => {
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
                message: `Check out this awesome post!${post.title}\n${post.url}`,
                title: post.title,
                url: post.url,
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
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: post.image }} style={styles.image} />
                <View style={styles.avatarContainer}>
                    <TouchableOpacity>
                        <Image source={{ uri: post.avatar }} style={styles.avatar} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%',padding:5 }}>
                    <Text style={styles.des}>{post.description}</Text>
                    <TouchableOpacity>
                    <SimpleLineIcons name="options-vertical" size={25} color="black" style={styles.optionsvertical} />
                   
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={styles.bgctr}>
                    <Text style={{ fontSize: 16, color:'black' }}>{post.content}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' ,marginVertical:15 }}>
                    <View style={{ width: 200, height: 35, alignItems: 'center', flexDirection: 'row', gap: 5, paddingLeft: 20 }}>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setPopoverVisible(true)}>
                            {selectedEmoji ? (
                                <Text style={{ fontSize: 22 }}>{selectedEmoji}</Text>
                            ) : (
                                <Entypo name="heart-outlined" size={25} color="black" style={styles.optionsvertical} />
                            )}
                        </TouchableOpacity>
                           
                        <Text style={{color:'black'}}>{post.likes}</Text>
                                 <Popover
                                isVisible={isPopoverVisible}
                                onRequestClose={() => setPopoverVisible(false)}
                                from={{ x: 54, y: 760 }}
                            >
                                <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-around', gap: 20,  borderRadius:50}}>
                                    {emojis.map((emoji, index) => (
                                        <TouchableOpacity key={index} onPress={() => handleEmojiPress(emoji)}>
                                            <Text style={{ fontSize: 20 }}>{emoji}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </Popover>
 
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="comment-outline" size={25} color="black" style={{marginLeft:8}} />
                        </TouchableOpacity>
                        <Text style={{color:'black'}}>{post.comments}</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <TouchableOpacity onPress={handleShare}>
                            <FontAwesome name="share-square-o" size={25} color="black" style={styles.optionsvertical} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: '100%',
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius: 10,
    },
    imageContainer: {
        width: '100%',
        position: 'relative',
        marginRight: 10,
    },
    image: {
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
        paddingLeft: 120,
        flexDirection: 'row',
        top: 0



    },
    optionsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    des: {
        fontWeight:'600',
        fontSize: 15,
        color: "black"
    },
    bgctr: { width:'91%',
    paddingHorizontal:20, paddingVertical:10,
}
});

export default PostComponent;
