import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import combinedData from './Profiledatas/PostData';
import PostDetails from './Likeicon';

const RowComponent = ({ image1Source, text, image2Source, onPressOptions }) => {

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
                message: `Check out this awesome post!${combinedData[0].title}\n${combinedData[0].url}`,
                title: combinedData[0].title,
                url: combinedData[0].url,
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
    // Split the text into an array of words
    if (!text) {
        return null; // Return null or any other default content
    }
    const words = text.split(' ');
    const post = combinedData[0];
    return (
        <>
           <View style={styles.bgctr}>
           <View style={styles.container}>
                <Image source={image1Source} style={styles.image1} />
                <View style={{height:'20%',flex:1 ,alignItems:'center',justifyContent:'center', }}>
                <Text style={styles.text} numberOfLines={2}>
                    {words.map((word, index) => (
                        <Text key={index} style={word === 'Falco' || word === 'Nelcy' ? styles.highlightedText : null}>
                            {word}{' '}
                        </Text>
                    ))}
                </Text>
                </View>
                <Image source={image2Source} style={styles.image2} />
                <TouchableOpacity onPress={onPressOptions}>
                    <SimpleLineIcons name="options-vertical" size={25} color="black" style={styles.optionsVertical} />
                </TouchableOpacity>
            </View>
            {/* {post.following ? (
                <PostDetails
                    post={post}
                    isPopoverVisible={isPopoverVisible}
                    setPopoverVisible={setPopoverVisible}
                    selectedEmoji={selectedEmoji}
                    handleEmojiPress={handleEmojiPress}
                    handleShare={handleShare}
                    emojis={emojis}
                />
            ):null} */}
           </View>
        </>
    );
};

const styles = {
    container: {
        flex:1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    bgctr: {
        flex:1,
        borderRadius: 10,
        borderWidth: 0.2,
        borderRadius: 10,
        borderColor: '#424242'
    },
    image1: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 25,
    },
    text: {
        flex:1,
        fontSize: 12,
        color: 'black',
    },
    highlightedText: {
        fontWeight: '900',
        color: 'black',
    },
    image2: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 25,
    },
    optionsVertical: {
        marginLeft: 'auto',
    },
};

export default RowComponent;
