import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SocialBtn = () => {
  const dataArray = [
    {
      id: 1,
      imageSource: require('../Image/Google.png'),
      title: 'Sign in with Google',
    },
    {
      id: 2,
      imageSource: require('../Image/Vector.png'),
      title: 'Sign in with Apple',
    },
    {
      id: 3,
      imageSource: require('../Image/Facebook.png'),
      title: 'Sign in with Facebook',
    },
    {
      id: 4,
      imageSource: require('../Image/Outlook.png'),
      title: 'Sign in with Outlook',
    },
  ];

  return (
    <View style={styles.container}>
      {dataArray.map((data) => (
        <View key={data.id} style={styles.itemContainer}>
        <TouchableOpacity style={{ flexDirection:'row', gap:20}}>
          <Image source={data.imageSource} style={styles.image} />
          <Text style={styles.title}>{data.title}</Text>
        </TouchableOpacity>
        </View>
        
      ))}
      {/* <View style={styles.lgbtncontainer}>
                    <TouchableOpacity style={styles.touchableOpacitylgbtn} onPress={() => console.log('Log In pressed')}>
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>
                </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'colomn',
    justifyContent: 'space-between',
    alignItems: 'center',
gap:15,
  },
  itemContainer: {
    height:50,
    borderColor:"black", borderWidth:1, borderRadius:50,
    justifyContent:'center',
    width:'86%',
    paddingHorizontal:20,
    alignItems: 'center',
  },
  image: {
    width: 22,
    height: 22,
    borderRadius: 50,
   
  },
  title: {
    fontFamily:'Inter',
    fontSize: 18,
    fontWeight: '800',
color:'#000000'
  },
});

export default SocialBtn;
