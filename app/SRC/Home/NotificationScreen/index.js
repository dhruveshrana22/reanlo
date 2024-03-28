import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styles from './Style';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Image } from 'react-native-elements';
const NotiContent = ({ data, title, title2, image, onPress }) => {
    const [showFullText, setShowFullText] = useState(false);

    return (
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 15, width: '100%', justifyContent: 'space-between' }}>
            <Image source={image} style={{ width: 30, height: 30, marginRight: 10 }} />
            <View style={{ flex: 1, }}>
                <TouchableOpacity onPress={onPress}>
                    <Text numberOfLines={showFullText ? undefined : 2} style={{ color: 'black', fontSize: 14, }}>
                        {title}
                    </Text>
                </TouchableOpacity>
                {!showFullText && (
                    <TouchableOpacity onPress={() => setShowFullText(true)} style={{ justifyContent: 'flex-end' }}>
                        <Text style={{ color: 'black', fontWeight: '800', fontSize: 10 }}>
                            Show more
                        </Text>
                    </TouchableOpacity>
                )}


            </View>
            <Text style={{ color: 'gray', fontSize: 14 }}>
                {title2}
            </Text>
        </View>
    )
}

const NotificationScreen = () => {
    const data = {
        title: 'You have a new follower Dori Doreau ',
        days: "2 days ago",
        image: require("../../Image/Chasma.png"),
        name: 'dhruvesh',
        update: true,
        title1: 'Check out our personalized book recommendations just based on your prefernces.',
        days1: "9 days ago",
        image1: require("../../Image/microphone.png"),
        title2: 'Check out our personalized book recommendations just based on your prefernces.',
        days2: "9 days ago",
        image2: require("../../Image/microphone.png"),

    }
    const navigation = useNavigation();



    const handleOnPress = (screenName) => {
        // Navigate to the desired screen based on the provided screenName
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <View style={styles.backarrowctr}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrowleft" size={25} color="black" style={styles.img} />
                </TouchableOpacity>
                <View style={{ paddingTop: "3%" }}>
                    <Text style={styles.OTPtext}>
                        Notifications
                    </Text>
                </View>
            </View>
            <ScrollView>
                <View>
                    <NotiContent
                        data={data}
                        title={data.title}
                        title2={data.days}
                        image={data.image}
                        onPress={() => handleOnPress('DisCover')} // Pass the screen name here
                    />

                </View>

                {data.update && <View>
                    <NotiContent title={data.title1} title2={data.days1} image={data.image1} onPress={() => handleOnPress("Recent")} />
                </View>}
                <View>
                    <NotiContent data={data} title={data.title} title2={data.days} image={data.image} onPress={() => handleOnPress('DisCover')} />
                </View>
                {data.update && <View>
                    <NotiContent title={data.title2} title2={data.days2} image={data.image2} onPress={() => handleOnPress('DisCover')}/>
                </View>}


                <View>
                    <NotiContent data={data} title={data.title} title2={data.days} image={data.image} onPress={() => handleOnPress('DisCover')}/>
                </View>
                {data.update && <View>
                    <NotiContent title={data.title1} title2={data.days1} image={data.image1} onPress={() => handleOnPress("Recent")} />
                </View>}
                <View>
                    <NotiContent data={data} title={data.title} title2={data.days} image={data.image} />
                </View>
                {data.update && <View>
                    <NotiContent title={data.title2} title2={data.days2} image={data.image2} />
                </View>}


                <View>
                    <NotiContent data={data} title={data.title} title2={data.days} image={data.image} />
                </View>
                {data.update && <View>
                    <NotiContent title={data.title1} title2={data.days1} image={data.image1} onPress={() => handleOnPress("Recent")}  />
                </View>}
                <View>
                    <NotiContent data={data} title={data.title} title2={data.days} image={data.image} />
                </View>
                {data.update && <View>
                    <NotiContent title={data.title2} title2={data.days2} image={data.image2} />
                </View>}


                <View>
                    <NotiContent data={data} title={data.title} title2={data.days} image={data.image} />
                </View>
            </ScrollView>
        </View>

    );
};



export default NotificationScreen;
