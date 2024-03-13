import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import LogoutButton from '../../Componants/LogOutBtn';

const ProfileScreen = () => {


  return (
    <View style={styles.container}>
     <LogoutButton/>    
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default ProfileScreen;
