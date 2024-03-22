import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Popover from 'react-native-popover-view';

const PostDetails = ({ post, isPopoverVisible, setPopoverVisible, selectedEmoji, handleEmojiPress, handleShare, emojis }) => {
   
   
   
    return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 10 }}>
                <View style={{ width: 230, height: 35, alignItems: 'center', flexDirection: 'row', gap: 5, paddingLeft: 12 }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setPopoverVisible(true)}>
                        {selectedEmoji ? (
                            <Text style={{ fontSize: 22 }}>{selectedEmoji}</Text>
                        ) : (
                            <Entypo name="heart-outlined" size={25} color="black" style={styles.optionsvertical} />
                        )}
                    </TouchableOpacity>
                    <Text style={{ color: 'black', marginRight:10}}>{post.likes}</Text>
                    <Popover
                        isVisible={isPopoverVisible}
                        onRequestClose={() => setPopoverVisible(false)}
                        from={{ x: 54, y: 760 }}
                    >
                        <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-around', gap: 20, borderRadius: 50 }}>
                            {emojis.map((emoji, index) => (
                                <TouchableOpacity key={index} onPress={() => handleEmojiPress(emoji)}>
                                    <Text style={{ fontSize: 20 }}>{emoji}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </Popover>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="comment-outline" size={25} color="black" style={{ marginLeft: 8 }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'black' }}>{post.comments}</Text>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <TouchableOpacity onPress={handleShare}>
                        <FontAwesome name="share-square-o" size={25} color="black" style={styles.optionsvertical} />
                    </TouchableOpacity>
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
        borderWidth: 1,
        borderRadius: 10,
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

export default PostDetails;
