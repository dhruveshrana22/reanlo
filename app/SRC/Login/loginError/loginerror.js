import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Loginerror = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconBackground}>
          <View style={styles.iconInnerBackground} />
          <View style={styles.icon} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Enter your valid email</Text>
        <Text style={styles.description}>
          The email you have entered is not valid, please re-enter
        </Text>
      </View>
      <View style={styles.gradientBackground} />
      <View style={styles.shadowBar} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: 'white',
        borderRadius: 8,
        
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 16,
        // Android
        elevation: 4,
        // iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 8,

borderBottomColor:'red',
borderBottomWidth:3
    },
  iconContainer: {
    padding: 4,
    backgroundColor: 'rgba(249.74, 199.48, 213.47, 0.30)',
    borderRadius: 43,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    display: 'flex',
  },
  iconBackground: {
    width: 24,
    height: 24,
    position: 'relative',
  },
  iconInnerBackground: {
    width: 24,
    height: 24,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: '#D9D9D9',
  },
  icon: {
    width: 20,
    height: 20,
    left: 2,
    top: 2,
    position: 'absolute',
    backgroundColor: '#F04248',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    
  },
  title: {
    alignSelf: 'stretch',
    color: 'black',
    fontSize: 17,
    fontFamily: 'Poppins',
    fontWeight: '900',
    lineHeight: 22,
  },
  description: {
    alignSelf: 'stretch',
    color: '#3C3C3C',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 18,
  },
  gradientBackground: {
    width: 240,
    height: 240,
    left: -88,
    top: -88,
    position: 'absolute',
    backgroundColor:
      'radial-gradient(100.00% 100.00% at NaN% NaN%, rgba(240, 66, 72, 0.05) 0%, rgba(138, 213, 166, 0) 100%, rgba(240, 66, 72, 0) 100%)',
    borderRadius: 9999,
  },
  shadowBar: {
    width: 375,
    height: 14,
    left: -20,
    top: 79,
    position: 'absolute',
    flexDirection: 'row',
  },
});


export default Loginerror;
