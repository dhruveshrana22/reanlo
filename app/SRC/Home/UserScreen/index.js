import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ProfileComponent, ProfileComponent2 } from '../../Componants/HomComponant/Profilecomponant/ProfileComponent';
import { ScrollView } from 'react-native-gesture-handler';
import combinedData from '../../Componants/HomComponant/YourFeedComponant/Profiledatas/PostData';
import styles from './style';
import { AuthoreBox, FavourateGenre, Followerbox, Followerbox2 } from '../../Componants/Followerboxcompo';
import BooksComponent from '../../Componants/Books';
import { AddSlave, TagsComponant } from '../../Componants/Shelves';

const UserScreen = () => {
    const emoji = (
        <View style={{
            position: 'absolute',

            alignItems: 'center'
        }}>
            <Text style={{ fontSize: 18, }}>
                😊
            </Text>
        </View>
    )

    const post = combinedData[0];
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}

                style={{ marginTop: 40 }}
            >
                <View style={styles.Profilecontainer}>
                    <ProfileComponent2 />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 20, gap: 15 }}>
                    <Followerbox no={"59K"} title={"Followers"} />
                    <Followerbox no={"471"} title={"Following"} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 15, flex: 1 }}>
                    <Followerbox2 nos={"3/10"} title1={"Monthly reading tracker"} />
                    <Followerbox2 nos={"80/100"} title1={"Yearly reading tracker"} />
                </View>
                <View>
                    <FavourateGenre />
                </View>
                <View style={styles.AutherContent}>
                    <AuthoreBox />
                </View>
                <View style={styles.HighestRated}>
                    {post.books && <BooksComponent title={'Highest Rated Books'} imageSources={[post.book1, post.book2, post.book3, post.book4, post.book5]} emoji={emoji} onPressview={() => handlebooks('booksread')} />}

                </View>
                <View>
                    <AddSlave />
                </View>
                <View>
                    <TagsComponant />
                </View>
            </ScrollView>
        </View>
    );
};



export default UserScreen;
