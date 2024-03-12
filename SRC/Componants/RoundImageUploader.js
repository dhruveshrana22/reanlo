import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import ImagePicker from 'react-native-image-crop-picker'; // Import from 'react-native-image-crop-picker'

const RoundImageUploader = ({ onImageUpload }) => {
  const [avatarSource, setAvatarSource] = useState(null);

  const selectImage = async () => {
    try {
      const response = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        mediaType: 'photo',
      });
  
      if (response && !response.didCancel) {
        const image = { uri: response.path };
        setAvatarSource(image);
        // Call the onImageUpload prop to pass the image data to the parent component
        onImageUpload(image);
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage} style={styles.avatarContainer}>
      {avatarSource ? (
  <Image source={avatarSource.uri ? { uri: avatarSource.uri } : null} style={styles.avatarImage} />
) : (
  <Avatar
    rounded
    size={100}
    overlayContainerStyle={{ backgroundColor: '#FFE499' }}
    icon={{ name: 'user-o', size: 40, type: 'font-awesome', color: 'black' }}
    iconStyle={{ backgroundColor: 'transparent' }}
  />
)}

      </TouchableOpacity>
      <View style={{ position: 'absolute', height: '100%', width: '100%' }}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'black',
            height: 25,
            width: 25,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            top: '77%',
            left: '54%',
          }}>
          <Image source={require('../Image/Downlod.png')} style={styles.imagedg} />
        </View>
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
   
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  removeIconContainer: {
    marginTop: 10,
  },
  iconStyle: {
    backgroundColor: 'transparent', // Make the background transparent
    // Add any other specific styles to the icon
  },
  
});

export default RoundImageUploader;
