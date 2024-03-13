import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const ProfileComponent = () => {
  const navigation= useNavigation();
  const userDetails = useSelector((state) => state.loginReducer.loggedInUser);
const handleProfile =()=>{
  navigation.replace("Profile")
}
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleProfile}>
        <Avatar
          size="large"
          rounded
          containerStyle={styles.avatarContainer}
          source={{ uri: userDetails.profileImage.uri }}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Hello</Text>
        <Text style={styles.nameText}>{userDetails.userName}</Text>
      </View>
      <TouchableOpacity>
        <Icon name="notifications-outline" size={30} color="black" style={styles.notificationIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatarContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  nameText: {
    fontSize: 22,
    fontWeight: '900',
    color: 'black',
  },
  notificationIcon: {
    marginLeft: 10,
  },
});

export default ProfileComponent;
