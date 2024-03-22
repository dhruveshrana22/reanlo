import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProfileComponent, ProfileComponent2 } from '../../Componants/HomComponant/Profilecomponant/ProfileComponent';
import { ScrollView } from 'react-native-gesture-handler';
import combinedData from '../../Componants/HomComponant/YourFeedComponant/Profiledatas/PostData';
import styles from './style';
import { Followerbox ,Followerbox2 } from '../../Componants/Followerboxcompo';

const UserScreen = () => {
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
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',  gap: 15, flex:1 }}>
                    <Followerbox2 nos={"3/10"} title1={"Monthly reading tracker"} />
                    <Followerbox2 nos={"80/100"} title1={"Yearly reading tracker"} />
                </View>


            </ScrollView>
        </View>
    );
};



export default UserScreen;
