import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RjsBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>
          Username must be unique.
          {'\n'}
          Username must be between 3 and 25 characters.
          {'\n'}
          People can search you with this name.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '100%',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#969696',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row', // Use flexDirection: 'row' for inline-flex behavior
  },
  innerContainer: {
    width: 318,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 8,
  },
  text: {
    color: '#616161',
    fontSize: 14,
    fontFamily: 'Urbanist',
    fontWeight: '500',
    lineHeight: 22.4,
    letterSpacing: 0.2,
  },
});

export default RjsBox;
