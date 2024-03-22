import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const ProfileComponent = () => {
  const navigation = useNavigation();
  const userDetails = useSelector((state) => state.loginReducer.loggedInUser);
  const handleProfile = () => {
    navigation.navigate("Profile")
  }


  const handlenotification = () => {
    navigation.navigate("Notifications");
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{}} onPress={handleProfile}>
        <Avatar
          size="large"
          rounded
          containerStyle={styles.avatarContainer}
          source={{ uri: userDetails.profileImage?.uri }}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Hello</Text>
        <Text style={styles.nameText}>{userDetails.userName}</Text>
      </View>
      <TouchableOpacity onPress={handlenotification}>
        <Icon name="notifications-outline" size={30} color="black" style={styles.notificationIcon} />
      </TouchableOpacity>
    </View>
  );
};
const ProfileComponent2 = () => {
  const navigation = useNavigation();
  const userDetails = useSelector((state) => state.loginReducer.loggedInUser);
  const handleProfile = () => {
    navigation.navigate("Profile")
  }
  console.log("userdata", userDetails)

  const handlenotification = () => {
    navigation.navigate("Notifications");
  }

  const icon = {
    setting: 'setting',
    instagram: 'instagram',
    twitter: 'twitter',
    youtube: 'youtube',
  }
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={{}} onPress={handleProfile}>
          <Avatar
            size="large"
            rounded
            containerStyle={styles.avatarContainer}
            source={{ uri: userDetails.profileImage?.uri }}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>

          <Text style={styles.nameText}>{userDetails.userName}</Text>
          <Text style={styles.emailText}>{userDetails.email}</Text>
          <View style={{ flexDirection: 'row', paddingTop: 10, gap: 8, flex:1}}>
            <AntDesign name={icon.instagram} size={18} color="gray" />
            <AntDesign name={icon.twitter} size={18} color="gray" />
            <AntDesign name={icon.youtube} size={18} color="gray" />

          </View>
        </View>
        <TouchableOpacity onPress={handlenotification}>
          <FontAwesome name="share-square-o" size={25} color="black" style={styles.notificationIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlenotification}>
          <AntDesign name={icon.setting} size={25} color="black" style={styles.notificationIcon} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 15, flex: 1,  }}>
        <View style={{ paddingHorizontal: 10, flex: 1, }}>
          <Text style={styles.Biotext}>
            Bio
          </Text>
          <Text style={styles.Biotext2}>
          {userDetails.bio}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  avatarContainer: {
    borderRadius: 50, borderWidth: 3, borderColor: '#F8BB25CC',

  },
  textContainer: {
    paddingLeft: 10,
    flex: 1,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  nameText: {
    flex:1,
    fontSize: 24,
    fontWeight: '900',
    color: 'black',
  },
  emailText: {
    flex:1,
    fontSize: 16,
    color: '#F8BB25',
    fontWeight: '900'
  },
  notificationIcon: {
    marginLeft: 10,
  },
  Biotext: {
    flex: 1,
    color: 'black',
    marginVertical: 5,
    fontSize: 18,
    fontWeight: "700"
  },
  Biotext2: {
    flex: 1,
    color: 'black',
    fontSize: 16
  }
});

export { ProfileComponent, ProfileComponent2 };
