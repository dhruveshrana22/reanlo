import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Share } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Popover from 'react-native-popover-view';
import PostDetails from './Likeicon';
import combinedData from './Profiledatas/PostData';
import RowComponent from './ProfileRowcomponant';
import BookPostComponent from './Bookpostcomponant';
import BooksComponant from '../../Books';
import BooksComponent from '../../Books';

const PostDescription = ({ description }) => {
    return (
        <View style={styles.descriptionContainer}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, justifyContent: 'space-between' }}>
                <Text numberOfLines={2} style={styles.des}>{description}</Text>
                <TouchableOpacity>
                    <SimpleLineIcons name="options-vertical" size={25} color="black" style={styles.optionsvertical} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

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

    const post = combinedData[0]; // Accessing the first post from combinedData

    return (
        <View style={{ gap: 15 }}>
            <View style={styles.yourcontainer}>
                <Text style={styles.libraryText}>Your Feed</Text>
            </View>

            <View style={styles.container}>
                {/* Render post content */}
                <View style={styles.imageContainer}>
                    <Image source={post.image} style={styles.image} />
                    <View style={styles.avatarContainer}>
                        <TouchableOpacity activeOpacity={1}>
                            <Image source={post.avatar} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                </View>
                <PostDescription description={post.description} />
                <View>
                    <View style={{ paddingHorizontal: 10,  top:-10 }}>
                        <View style={styles.bgctr}>
                            <Text style={{ fontSize: 15, color: 'black' }}>{post.content}</Text>
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

            {/* Conditional rendering based on post properties */}
            {post.update && (
                <View>
                    {/* Render additional post data */}
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={post.image2} style={styles.image} />
                            <View style={styles.avatarContainer}>
                                <TouchableOpacity  activeOpacity={1}>
                                    <Image source={post.avatar2} style={styles.avatar} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <PostDescription description={post.description2} />
                        <View>
                        <View style={{ paddingHorizontal: 10,  top:-10 }}>
                                <View style={styles.bgctr}>
                                    <Text style={{ fontSize: 15, color: 'black' }}>{post.content2}</Text>
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
                </View>
            )}

            {post.freind && (
                <View>
                    {/* Render additional post data */}
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={post.image3} style={styles.image} />
                            <View style={styles.avatarContainer}>
                                <TouchableOpacity activeOpacity={1}>
                                    <Image source={post.avatar3} style={styles.avatar} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <PostDescription description={post.description3} />
                        <View>
                        <View style={{ paddingHorizontal: 10,  top:-10 }}>
                                <View style={styles.bgctr}>
                                    <Text style={{ fontSize: 20, color: 'black' }}>{post.ctn3}</Text>
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
                </View>
            )}

            {post.user && (
                <View>
                    {/* Render additional post data */}
                    <View style={styles.container4}>
                        <View style={styles.imageContainer}>
                            <Image source={post.image4} style={styles.image} />
                            <View style={styles.avatarContainer}>
                                <TouchableOpacity  activeOpacity={1}>
                                    <Image source={post.avatar4} style={styles.avatar} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <PostDescription description={post.description4} />
                        <View>
                            <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                <View style={styles.bgctr}>
                                    {/* <Text style={{ fontSize: 20, color: 'black' }}>{post.co4}</Text> */}
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
                </View>
            )}

            {post.userprofile && <RowComponent image1Source={post.userprofileImageSource} text={post.userprofileText} image2Source={post.userprofileImage2Source} onPressOptions={() => { }} />}


            {post.following && (
                <View>
                    {/* Render additional post data */}
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={post.image3} style={styles.image} />
                            <View style={styles.avatarContainer}>
                                <TouchableOpacity  activeOpacity={1}>
                                    <Image source={post.avatar3} style={styles.avatar} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <PostDescription description={post.description3} />
                        <View style={{top:-10}}>

                            <PostDetails
                                post={post}
                                isPopoverVisible={isPopoverVisible}
                                setPopoverVisible={setPopoverVisible}
                                selectedEmoji={selectedEmoji}
                                handleEmojiPress={handleEmojiPress}
                                handleShare={handleShare}
                                emojis={emojis}
                            />
                            <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                <View style={styles.bgctr3}>
                                    <Text style={{ color: 'black' }}>{post.ctn3}</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </View>

            )}
            {post.following && (
                <View style={styles.container}>
                    <View style={styles.descriptionContainer2}>
                        <TouchableOpacity  activeOpacity={1}>
                            <Image source={post.avatar3} style={styles.avatar3} />
                        </TouchableOpacity>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, justifyContent: 'space-between' }}>
                            <Text style={styles.des}>{post.description3}</Text>
                            <TouchableOpacity>
                                <SimpleLineIcons name="options-vertical" size={25} color="black" style={styles.optionsvertical} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>



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



            )}
            {post.following2 && (
                <View>
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={post.image5} style={styles.image} />
                            <View style={styles.avatarContainer}>
                                <TouchableOpacity activeOpacity={1}>
                                    <Image source={post.avatar3} style={styles.avatar} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <PostDescription description={post.description5} />
                        <View>
                            <PostDetails
                                post={post}
                                isPopoverVisible={isPopoverVisible}
                                setPopoverVisible={setPopoverVisible}
                                selectedEmoji={selectedEmoji}
                                handleEmojiPress={handleEmojiPress}
                                handleShare={handleShare}
                                emojis={emojis}
                            />
                            <View style={styles.rateView}>
                                <Image source={require('../../../Image/Rate.png')} style={styles.rateimg} />
                            </View>
                            <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                <View style={styles.bgctr3}>
                                    <Text style={{ color: 'black' }}>{post.ctn5}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            )}
            {post.following3 && (
                <View>
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={post.image6} style={styles.image} />
                            <View style={styles.avatarContainer}>
                                <TouchableOpacity activeOpacity={1}>
                                    <Image source={post.avatar3} style={styles.avatar} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <PostDescription description={post.description6} />
                        <View>
                            <PostDetails
                                post={post}
                                isPopoverVisible={isPopoverVisible}
                                setPopoverVisible={setPopoverVisible}
                                selectedEmoji={selectedEmoji}
                                handleEmojiPress={handleEmojiPress}
                                handleShare={handleShare}
                                emojis={emojis}
                            />
                            <View style={styles.rateView}>
                                <Image source={require('../../../Image/Rate.png')} style={styles.rateimg} />
                            </View>
                            <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                <View style={styles.bgctr3}>
                                    <Text style={{ color: 'black' }}>{post.ctn6}</Text>
                                </View>
                            </View>
                            <View style={{ paddingHorizontal: 13, paddingVertical: 10, gap: 15, paddingBottom: 20 }}>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <Image source={require('../../../Image/Daughter.png')} style={styles.charliimg} />
                                        <Text style={{ color: 'black' }}>Charlie</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <Text style={{ color: 'gray', fontSize: 12 }}>3 days ago</Text>
                                    </View>
                                </View>
                                <View><Text style={{ color: 'black' }}>I am Americe </Text></View>

                            </View>
                        </View>
                    </View>
                </View>

            )}

            {post.following && (
                <View>

                    <View style={{}}>
                        <RowComponent image1Source={post.userprofileImageSource} text={post.userprofileText} onPressOptions={() => { }} />

                    </View>

                </View>

            )}

            {post.following && (
                <BookPostComponent
                    post={post}
                    description={post.description2}
                    imagebook={post.image10}
                    avtar={post.avatar2}
                    isPopoverVisible={isPopoverVisible}
                    setPopoverVisible={setPopoverVisible}
                    selectedEmoji={selectedEmoji}
                    handleEmojiPress={handleEmojiPress}
                    handleShare={handleShare}
                    emojis={emojis}
                />
            )}
            {post.following && (
                <View>
                    {/* Render additional post data */}
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={post.image7} style={styles.image} />
                            <View style={styles.avatarContainer}>
                                <TouchableOpacity activeOpacity={1}>
                                    <Image source={post.avatar3} style={styles.avatar} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <PostDescription description={post.description3} />
                        <View>

                            <PostDetails
                                post={post}
                                isPopoverVisible={isPopoverVisible}
                                setPopoverVisible={setPopoverVisible}
                                selectedEmoji={selectedEmoji}
                                handleEmojiPress={handleEmojiPress}
                                handleShare={handleShare}
                                emojis={emojis}
                            />
                            <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                <View style={styles.bgctr3}>
                                    <Text style={{ color: 'black' }}>{post.ctn3}</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </View>

            )}
            {post.books && <BooksComponent title1={post.booktitle}imageSources={[post.book1, post.book2, post.book3, post.book4, post.book5]} />}
            {post.userprofile && <RowComponent image1Source={post.userprofileImageSource} text={post.userprofileText} image2Source={post.userprofileImage2Source} onPressOptions={() => { }} />}

            {post.following && (
                <BookPostComponent
                    post={post}
                    description={post.description2}
                    imagebook={post.image4}
                    avtar={post.avatar2}
                    isPopoverVisible={isPopoverVisible}
                    setPopoverVisible={setPopoverVisible}
                    selectedEmoji={selectedEmoji}
                    handleEmojiPress={handleEmojiPress}
                    handleShare={handleShare}
                    emojis={emojis}
                />
            )}
            {post.following && (
                <View style={styles.container}>
                    <View style={styles.descriptionContainer2}>
                        <TouchableOpacity activeOpacity={1}>
                            <Image source={post.avatar3} style={styles.avatar3} />
                        </TouchableOpacity>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, justifyContent: 'space-between' }}>
                            <Text style={styles.des}>Joan Blessing</Text>
                            <TouchableOpacity>
                                <SimpleLineIcons name="options-vertical" size={25} color="black" style={styles.optionsvertical} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={{ flex: 1, flexDirection: 'row', width: 400, alignItems: 'center', paddingHorizontal: 13, paddingBottom: 10 }}>

                            <View style={{ justifyContent: 'center', width: 350, }}>
                                <Text style={{ color: 'gray', fontSize: 22 }}>My Brilliant Friend will be released on 27/02/2024</Text>
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
            )}
            {post.following && (
                <View style={styles.container}>
                    <View style={styles.descriptionContainer2}>
                        <TouchableOpacity activeOpacity={1}>
                            <Image source={post.avatar3} style={styles.avatar3} />
                        </TouchableOpacity>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, justifyContent: 'space-between' }}>
                            <Text style={styles.des}>Joan Blessing</Text>
                            <TouchableOpacity>
                                <SimpleLineIcons name="options-vertical" size={25} color="black" style={styles.optionsvertical} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={{ flex: 1, justifyContent:'center', alignItems: 'center', }}>
                           <View style={{flex:1, flexDirection:"row"}}>
                           <Image source={post.avatar3}  style={styles.avtarstyle}/>
                            <Image source={post.avatar3}  style={styles.avtarstyle2}/>
                           </View>

                            <View style={{ justifyContent: 'center',alignItems:'center', paddingVertical:5}}>
                                <Text style={{ color: 'gray', fontSize: 16,textAlign:'center'}}>Smith is now friends with Greta</Text>
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
            )}
            {post.books && <BooksComponent imageSources={[post.book1, post.book2, post.book3, post.book4, post.book5]} />}
            {post.following3 && (
                <View>
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={post.image6} style={styles.image} />
                            <View style={styles.avatarContainer}>
                                <TouchableOpacity activeOpacity={1}>
                                    <Image source={post.avatar3} style={styles.avatar} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <PostDescription description={post.description6} />
                        <View>
                            <PostDetails
                                post={post}
                                isPopoverVisible={isPopoverVisible}
                                setPopoverVisible={setPopoverVisible}
                                selectedEmoji={selectedEmoji}
                                handleEmojiPress={handleEmojiPress}
                                handleShare={handleShare}
                                emojis={emojis}
                            />
                            <View style={styles.rateView}>
                                <Image source={require('../../../Image/Rate.png')} style={styles.rateimg} />
                            </View>
                            <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                                <View style={styles.bgctr3}>
                                    <Text style={{ color: 'black' }}>{post.ctn6}</Text>
                                </View>
                            </View>
                            <View style={{ paddingHorizontal: 13, paddingVertical: 10, gap: 15, paddingBottom: 20 }}>
                                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <Image source={require('../../../Image/Daughter.png')} style={styles.charliimg} />
                                        <Text style={{ color: 'black' }}>Charlie</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', gap: 10 }}>
                                        <Text style={{ color: 'gray', fontSize: 12 }}>3 days ago</Text>
                                    </View>
                                </View>
                                <View><Text style={{ color: 'black' }}>I am Americe </Text></View>

                            </View>
                        </View>
                    </View>
                </View>

            )}
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
        left: 15,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    },

    shimg: {
        width: 70,
        height: 100,
        borderRadius: 10
    },
    avatar3: {

        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    },
    descriptionContainer: {
        paddingLeft: 95,
        flexDirection: 'row',
        top: -5,
    },
    descriptionContainer2: {
        flex: 1,
        paddingHorizontal: 8,
        flexDirection: 'row',
        paddingTop: 10


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
    },
    //  Avtar Style 
    avtarstyle:{
        width:60,
        height:60,
        borderRadius:50,
        borderColor:'white',
        borderWidth:3
    },
    avtarstyle2:{
        width:60,
        height:60,
        borderRadius:50,
        marginLeft:-10,
        borderColor:'white',
        borderWidth:3
    }
});

export default PostComponent;
