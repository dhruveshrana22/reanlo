import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { logoutUser } from '../redux/UserDetail/Loginaction';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const LogoutButton = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.replace("Introduction1");
    // Logic for logout
    console.log('User logged out');
  };

  return (
    <View style={styles.containerbg}>
     <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  containerbg: {
height:"100%",
  
  },
  container: {
height:"100%",
   justifyContent:'flex-end',
    alignItems: 'center',
    bottom:"10%"
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LogoutButton;
