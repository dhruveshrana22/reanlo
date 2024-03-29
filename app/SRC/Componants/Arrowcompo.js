import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'; // Import the appropriate vector icon library

const ArrowCompo = ({ name, names }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.backarrowctr}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={25} color="black" style={styles.img} />
      </TouchableOpacity>
      <View style={{ paddingTop: "3%" }}>
        <Text style={styles.OTPtext}>
          {name}{names}
        </Text>
      </View>
    </View>
  )
};
export const ArrowCompo2 = ({ name, names }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.backarrowctr}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={25} color="black" style={styles.img} />
      </TouchableOpacity>
      <View style={{ paddingTop: "3%" }}>
        <Text style={styles.OTPtext}>
          {name}
        </Text>
      </View>
      <View style={styles.ctrctntext}>
        <Text style={styles.ctntext}>
          Customize your interests so that you can
          your most favorite books
        </Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  backarrowctr: {
    paddingBottom: 15,

  },
  img: {
    alignItems: 'center',
    justifyContent: "center",

    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    padding: 8,

  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#333',
  },
  OTPtext: {
    fontFamily: 'Playfair Display',
    fontSize: 30,
    color: 'black',
    fontWeight: '700'

  },
  ctntext: {
    color: 'black',
    fontSize: 16
  },
  ctrctntext: {
    paddingRight: 15,
    paddingTop: 8
  }
});

export default ArrowCompo;
