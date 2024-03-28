import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';
import SearchBar from '../../Componants/Searchbar/SearchBar';
import TopBookscomp from '../../Componants/TopBookscompon';

const DisCoverScreen = () => {
    const navigation = useNavigation();

    const titlesData = [
        {
            id: '1', title: 'Top Books Of The Week', data: [
                { id: '1', image: require('../../Image/TopBooks/Fiction.png') },
                { id: '2', image: require('../../Image/TopBooks/NonFiction.png') },
                { id: '3', image: require('../../Image/TopBooks/Self.png') },
                { id: '4', image: require('../../Image/TopBooks/Inspiration.png') },
                { id: '5', image: require('../../Image/TopBooks/Fiction.png') },
            ]
        },
        {
            id: '2', title: 'New reales in Fection', data: [
                // Add data for the second title as needed
                { id: '1', image: require('../../Image/TopBooks/before.png') },
                { id: '2', image: require('../../Image/TopBooks/thedark.png') },
                { id: '3', image: require('../../Image/TopBooks/ropin.png') },
            ]
        },
        {
            id: '3', title: 'New release in Thriller', data: [
                // Add data for the second title as needed
                { id: '1', image: require('../../Image/TopBooks/sh.png') },
                { id: '2', image: require('../../Image/TopBooks/king.png') },
                { id: '3', image: require('../../Image/TopBooks/flame.png') },
            ]
        },
        // Add more titles and their corresponding data as needed
    ];

    const customImageStyle2 = {
        // Custom image styles for the first instance of TopBookscomp
        width: 110,
        height: 160,
    };

    // Filter titlesData to include only the data with id equal to 1
    const filteredData = titlesData.filter(item => item.id === '1');
    const filteredData2 = titlesData.filter(item => item.id === '2');
    const filteredData3 = titlesData.filter(item => item.id === '3');
    const handlenotification = () => {
        navigation.navigate("Notifications");
    }
    return (

        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[1]}
                style={{ marginTop:90 }}

            >
                <View style={styles.textnotificationctr}>
                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>Discover</Text>
                    </View>
                    <TouchableOpacity onPress={handlenotification}>
                        <Icon name="notifications-outline" size={30} color="black" style={styles.notificationIcon} />
                    </TouchableOpacity>
                </View>


                <View style={styles.SearchBar}>
                    <SearchBar />

                </View>
                <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center', paddingLeft: 17 }}>
                    <ScrollView
                        style={styles.scrcontainer}
                        horizontal={true} // Enable horizontal scrolling
                        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
                    >
                        <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={require("../../Image/inigoimage.png")} style={styles.imgeindigo} />
                            <Image source={require("../../Image/author.png")} style={styles.imgeindigo} />
                            <Image source={require("../../Image/NewBook.png")} style={styles.imgeindigo} />
                        </View>
                    </ScrollView>
                </View>

                {/* Render TopBookscomp with filtered data and customImageStyle1 */}
                <View style={{ paddingHorizontal: 13 }}>
                    <TopBookscomp titlesData={filteredData} />
                </View>

                {/* Second instance of TopBookscomp with customImageStyle2 */}
                <View style={{ paddingHorizontal: 13 }}>
                    <TopBookscomp titlesData={filteredData2} customImageStyle={customImageStyle2} />
                </View>
                <View style={{ paddingHorizontal: 13 }}>
                    <TopBookscomp titlesData={filteredData3} customImageStyle={customImageStyle2} />
                </View>
                <View style={{ paddingHorizontal: 13 }}>
                    <TopBookscomp titlesData={filteredData3} customImageStyle={customImageStyle2} />
                </View>
                <View style={{ paddingHorizontal: 13 }}>
                    <TopBookscomp titlesData={filteredData3} customImageStyle={customImageStyle2} />
                </View>
            </ScrollView>
        </View>
    );
};

export default DisCoverScreen;
