import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';
import combinedData from '../../Componants/HomComponant/YourFeedComponant/Profiledatas/PostData';
import BooksComponent from '../../Componants/Books';
import SearchBar from '../../Componants/Searchbar/SearchBar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CurrentReadBook } from '../../Componants/My BookComponant/CurrentReadingBook';


const MyBook = () => {
  const post = combinedData[0];
  const navigation = useNavigation();
  const handlenotification = () => {
    navigation.navigate("Notifications");
}
  const handlebooks = (Screen) => {
    navigation.navigate(Screen);
}
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        style={{ marginTop: 70 }}
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
        {/* Current read Book content */}
        <View>
          <CurrentReadBook title1={"Currently Reading"} title2={"View All"}/>
        </View>


        {/* Books Componanat    */}
        {/* in this Post Componant navigate Screen  */}
        {post.books && <BooksComponent title={'Books To Read'} imageSources={[post.book1, post.book2, post.book3, post.book4, post.book5]} onPressview={()=>handlebooks('booksread')}/>}
        {post.books && <BooksComponent title={'Finished Reading'} imageSources={[post.book1, post.book2, post.book3, post.book4, post.book5]} onPressview={()=>handlebooks('Fineshed')}/>}
        {post.books && <BooksComponent title={'Books To Read'} imageSources={[post.book1, post.book2, post.book3, post.book4, post.book5]} />}
        {post.books && <BooksComponent title={'Books To Read'} imageSources={[post.book1, post.book2, post.book3, post.book4, post.book5]} />}

      </ScrollView>
    </View>
  );
};



export default MyBook;
