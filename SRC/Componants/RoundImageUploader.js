import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

const RoundImageUploader = () => {
  const [avatarSource, setAvatarSource] = useState(null);

  const selectImage = () => {
    const options = {
      title: 'Select Image',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setAvatarSource({ uri: response.uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage} style={styles.avatarContainer}>
        {avatarSource ? (
          <Image source={avatarSource} style={styles.avatarImage} />
        ) : (
          <Avatar
            rounded
            icon={{ name: 'camera', type: 'font-awesome' }}
            size={80}
            overlayContainerStyle={{ backgroundColor: 'lightgray' }}
          />
        )}
      </TouchableOpacity>
      {avatarSource && (
        <TouchableOpacity onPress={() => setAvatarSource(null)} style={styles.removeIconContainer}>
          <Icon name="times-circle" type="font-awesome" color="red" size={20} />
        </TouchableOpacity>
      )}
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
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'lightgray',
    overflow: 'hidden',
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  removeIconContainer: {
    marginTop: 10,
  },
});

export default RoundImageUploader;
