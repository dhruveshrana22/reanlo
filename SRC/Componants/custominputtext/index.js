import React from 'react';
import { TextInput } from 'react-native';
import styles from './style';

const CustomTextInput = ({ style, secureTextEntry, ...props }) => {
  return (
    <TextInput
      style={[styles.textInput, style]}  // Merge the styles with the provided style prop
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      autoCapitalize={props.autoCapitalize}
      autoCorrect={props.autoCorrect}
      placeholderTextColor={props.placeholderTextColor}
      secureTextEntry={secureTextEntry}  // Pass secureTextEntry prop
    />
  );
};

export default CustomTextInput;
