import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the appropriate vector icon library

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#333" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#616161"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 30,
    paddingHorizontal:15
  },
  icon: {
    marginLeft:10,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#333',
  },
});

export default SearchBar;
