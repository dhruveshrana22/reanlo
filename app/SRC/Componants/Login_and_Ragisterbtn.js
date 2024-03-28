import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Login_Ragister_Btn = () => {
const navigation = useNavigation();
    const handleLogin =()=>
    {
        navigation.navigate('login')
    }
    const handleSignup =()=>
    {
        navigation.navigate('SignUp')
    }


  return (
    <View style={{ flex: 1,flexDirection:'row', position: 'relative', justifyContent:'space-evenly', alignItems:'center' }}>
     <TouchableOpacity onPress={handleLogin} activeOpacity={0.7} style={styles.activeButtonContainer}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignup} activeOpacity={0.7} style={styles.buttonContainer}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 175,
    height: 49,
    
   
    backgroundColor: 'white',
    borderRadius: 85,
    borderColor: '#424242',
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  activeButtonContainer: {
    width: 175,
    height: 49,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#F8BB25',
    borderRadius: 65,
  },
  registerText: {
    alignItems:'center',
    justifyContent:'center',
    position: 'absolute',
    color: '#424242',
    fontSize: 18,
    fontFamily: 'Outfit',
    fontWeight: '800',
    lineHeight:23,
 
 

  },
  loginText: {
    alignItems:'center',
    justifyContent:'center',
    position: 'absolute',
    color: '#424242',
    fontSize: 18,
    fontFamily: 'Outfit',
    fontWeight: '900',
   
  
   
  },
});

export default Login_Ragister_Btn;
